import { useAdminAnalysisLogs } from '@/hooks/useAdminDashboard';

const AnalysisStats = () => {
  const { data } = useAdminAnalysisLogs();
  const stats = data?.stats;

  const ocrRate = stats
    ? (stats.ocrSuccessRate <= 1 ? (stats.ocrSuccessRate * 100).toFixed(1) : stats.ocrSuccessRate.toFixed(1)) + '%'
    : '97.3%';

  const avgTime = stats
    ? `${stats.averageAnalysisTimeSeconds.toFixed(1)}초`
    : '4.8초';

  const totalCount = stats
    ? `${stats.totalAnalysisCount.toLocaleString('ko-KR')}건`
    : '12845건';

  return (
    <section className='grid grid-cols-3 gap-6'>
      <article className='flex flex-col gap-2 rounded-xl border border-light-gray bg-white p-6'>
        <p className='text-dark-gray text-sm leading-5'>OCR 성공률</p>
        <h3 className='text-dark text-3xl font-semibold leading-9'>{ocrRate}</h3>
      </article>
      <article className='flex flex-col gap-2 rounded-xl border border-light-gray bg-white p-6'>
        <p className='text-dark-gray text-sm leading-5'>평균 분석 시간</p>
        <h3 className='text-dark text-3xl font-semibold leading-9'>{avgTime}</h3>
      </article>
      <article className='flex flex-col gap-2 rounded-xl border border-light-gray bg-white p-6'>
        <p className='text-dark-gray text-sm leading-5'>누적 분석 건수</p>
        <h3 className='text-dark text-3xl font-semibold leading-9'>{totalCount}</h3>
      </article>
    </section>
  );
};

export default AnalysisStats;
