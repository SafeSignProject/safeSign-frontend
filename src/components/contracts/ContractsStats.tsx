const STATS_ITEMS = [
  {
    title: '전체',
    count: '12',
    color: '#111827',
  },
  {
    title: '위험',
    count: '3',
    color: '#EF4444',
  },
  {
    title: '주의',
    count: '5',
    color: '#F59E0B',
  },
  {
    title: '안전',
    count: '4',
    color: '#059669',
  },
];

const ContractsStats = () => {
  return (
    <div className='flex items-center gap-4'>
      {STATS_ITEMS.map((item, idx) => (
        <section
          key={idx}
          className='border-light-gray flex w-full gap-2 rounded-sm border bg-white p-2 max-sm:items-center sm:flex-col sm:p-4'
        >
          <p className='text-dark-gray text-sm'>{item.title}</p>
          <h4 className='text-lg leading-8 font-semibold sm:text-2xl' style={{ color: item.color }}>
            {item.count}
          </h4>
        </section>
      ))}
    </div>
  );
};

export default ContractsStats;
