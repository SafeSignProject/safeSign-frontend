import { getContractAnalysisStatus, postContractAnalysis, postContractOCR } from '@/api/analysis';
import { AnalyzingBar, AnalyzingStep } from '@/components/upload';
import { showToast } from '@/utils/toast';
import { useMutation, useQuery } from '@tanstack/react-query';
import { FileSearchCorner } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AnalyzingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const contractId = location.state?.contractId;

  const [isAnalysisStarted, setIsAnalysisStarted] = useState(false);
  const hasStartedRef = useRef(false);

  // OCR + 분석 시작
  const { mutate: startAnalyze } = useMutation({
    mutationFn: async () => {
      // 1. OCR
      await postContractOCR(contractId);

      // 2. 분석 시작
      return await postContractAnalysis(contractId);
    },

    onSuccess: () => {
      setIsAnalysisStarted(true);
    },

    onError: () => {
      showToast.error('계약서 분석에 실패했습니다');
      navigate('/');
    },
  });

  // 분석 상태 polling (분석이 시작된 이후에만 호출하여 백엔드 순서 및 캐싱 문제 완벽 예방)
  const { data: statusData } = useQuery({
    queryKey: ['analysis-status', contractId],
    queryFn: () => getContractAnalysisStatus(contractId),
    enabled: isAnalysisStarted,
    refetchInterval: (query) => {
      const status = query.state.data?.status;

      if (status === 'PROCESSING') {
        return 5000;
      }
      return false;
    },
  });

  // 분석 완료시 즉시 내 계약서 목록으로 이동 처리 (불필요한 120초 대기 차단 및 중복 기회 최소화)
  useEffect(() => {
    const status = statusData?.status;
    if (status === 'COMPLETED') {
      showToast.success('계약서 분석이 완료되었습니다');
      navigate('/contracts');
    } else if (status === 'FAILED') {
      showToast.error('계약서 분석에 실패했습니다');
      navigate('/');
    }
  }, [statusData, navigate]);

  // 최초 실행 제어 (Strict Mode 중복 호출 방어 및 원래 안전했던 호출 순서 보장)
  useEffect(() => {
    if (!contractId) {
      navigate('/upload');
      return;
    }

    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      startAnalyze();
    }
  }, [contractId, navigate]);

  return (
    <main className='flex min-h-screen items-center justify-center bg-[#F9FAFB] px-4'>
      <section className='border-light-gray w-full max-w-[384px] rounded-sm border bg-white p-8'>
        <header className='mb-8 flex flex-col items-center justify-center gap-2'>
          <div className='bg-accent text-primary mb-2 rounded-full p-4'>
            <FileSearchCorner size={32} strokeWidth={1.5} />
          </div>
          <h3 className='text-dark text-xl leading-7 font-semibold'>계약서 분석 중</h3>
          <p className='text-dark-gray text-sm'>AI가 계약서를 분석하고 있습니다</p>
        </header>

        <AnalyzingStep />
        <AnalyzingBar />
      </section>
    </main>
  );
};

export default AnalyzingPage;
