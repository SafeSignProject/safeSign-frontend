import clsx from 'clsx';
import { CircleCheck } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { showToast } from '@/utils/toast';

const AnalyzingStep = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const fileNames: string[] = location.state?.fileNames ?? [];

  const [step, setStep] = useState(0);

  const getStepStatus = (index: number) => {
    if (index < step) return 'done';
    if (index === step) return 'active';
    return 'yet';
  };

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 5000),
      setTimeout(() => setStep(2), 10000),
      setTimeout(() => setStep(3), 15000),
      setTimeout(() => {
        showToast.success('계약서 분석이 완료되었습니다');
        navigate('/contracts');
      }, 20000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [navigate]);

  const step0 = getStepStatus(0);
  const step1 = getStepStatus(1);
  const step2 = getStepStatus(2);
  const step3 = getStepStatus(3);
  return (
    <div className='mb-8 space-y-4 max-sm:px-8'>
      <div>
        <div className='flex items-center gap-3'>
          {step0 === 'done' && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className='bg-primary flex items-center justify-center rounded-full p-1 text-white'
            >
              <CircleCheck size={16} />
            </motion.div>
          )}

          {step0 === 'active' && (
            <div className='border-primary flex items-center justify-center rounded-full border-2 bg-[#E8F9F0] p-1.5'>
              <motion.div
                className='bg-primary h-2 w-2 rounded-full'
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
              />
            </div>
          )}

          {step0 === 'yet' && <div className='bg-light-gray h-6 w-6 rounded-full' />}

          <p
            className={clsx(
              'font-medium',
              step0 === 'active'
                ? 'text-primary'
                : step0 === 'done'
                  ? 'text-dark'
                  : 'text-[#9CA3AF]',
            )}
          >
            파일 업로드 완료
          </p>
        </div>
        <div className='text-dark-gray space-y-2 pl-9 text-left text-sm'>
          {fileNames.map((name, idx) => (
            <p key={idx}>{name}</p>
          ))}
        </div>
      </div>

      <div>
        <div className='flex items-center gap-3'>
          {step1 === 'done' && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className='bg-primary flex items-center justify-center rounded-full p-1 text-white'
            >
              <CircleCheck size={16} />
            </motion.div>
          )}

          {step1 === 'active' && (
            <div className='border-primary flex items-center justify-center rounded-full border-2 bg-[#E8F9F0] p-1.5'>
              <motion.div
                className='bg-primary h-2 w-2 rounded-full'
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
              />
            </div>
          )}

          {step1 === 'yet' && <div className='bg-light-gray h-6 w-6 rounded-full' />}

          <p
            className={clsx(
              'font-medium',
              step1 === 'active'
                ? 'text-primary'
                : step1 === 'done'
                  ? 'text-dark'
                  : 'text-[#9CA3AF]',
            )}
          >
            텍스트 인식 중
          </p>
        </div>
        <p className='text-dark-gray pl-9 text-left text-sm'>OCR 기술로 계약서 내용 추출</p>
      </div>

      <div>
        <div className='flex items-center gap-3'>
          {step2 === 'done' && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className='bg-primary flex items-center justify-center rounded-full p-1 text-white'
            >
              <CircleCheck size={16} />
            </motion.div>
          )}

          {step2 === 'active' && (
            <div className='border-primary flex items-center justify-center rounded-full border-2 bg-[#E8F9F0] p-1.5'>
              <motion.div
                className='bg-primary h-2 w-2 rounded-full'
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
              />
            </div>
          )}

          {step2 === 'yet' && <div className='bg-light-gray h-6 w-6 rounded-full' />}

          <p
            className={clsx(
              'font-medium',
              step2 === 'active'
                ? 'text-primary'
                : step2 === 'done'
                  ? 'text-dark'
                  : 'text-[#9CA3AF]',
            )}
          >
            조항 분석
          </p>
        </div>
        <p className='text-dark-gray pl-9 text-left text-sm'>각 조항의 법적 타당성 검토</p>
      </div>

      <div>
        <div className='flex items-center gap-3'>
          {step3 === 'done' && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className='bg-primary flex items-center justify-center rounded-full p-1 text-white'
            >
              <CircleCheck size={16} />
            </motion.div>
          )}

          {step3 === 'active' && (
            <div className='border-primary flex items-center justify-center rounded-full border-2 bg-[#E8F9F0] p-1.5'>
              <motion.div
                className='bg-primary h-2 w-2 rounded-full'
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
              />
            </div>
          )}

          {step3 === 'yet' && <div className='bg-light-gray h-6 w-6 rounded-full' />}

          <p
            className={clsx(
              'font-medium',
              step3 === 'active'
                ? 'text-primary'
                : step3 === 'done'
                  ? 'text-dark'
                  : 'text-[#9CA3AF]',
            )}
          >
            위험도 평가 완료
          </p>
        </div>
        <p className='text-dark-gray pl-9 text-left text-sm'>종합 리스크 점수 산출</p>
      </div>
    </div>
  );
};

export default AnalyzingStep;
