const AnalysisStats = () => {
  return (
    <section className='grid grid-cols-3 gap-6'>
      <article className='flex flex-col gap-2 rounded-xl border border-light-gray bg-white p-6'>
        <p className='text-dark-gray text-sm leading-5'>OCR 성공률</p>
        <h3 className='text-dark text-3xl font-semibold leading-9'>97.3%</h3>
      </article>
      <article className='flex flex-col gap-2 rounded-xl border border-light-gray bg-white p-6'>
        <p className='text-dark-gray text-sm leading-5'>평균 분석 시간</p>
        <h3 className='text-dark text-3xl font-semibold leading-9'>4.8초</h3>
      </article>
      <article className='flex flex-col gap-2 rounded-xl border border-light-gray bg-white p-6'>
        <p className='text-dark-gray text-sm leading-5'>누적 분석 건수</p>
        <h3 className='text-dark text-3xl font-semibold leading-9'>12845건</h3>
      </article>
    </section>
  );
};

export default AnalysisStats;
