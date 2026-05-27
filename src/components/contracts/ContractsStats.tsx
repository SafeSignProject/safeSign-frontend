import type { ResponseContracts } from '@/types/contracts';

const ContractsStats = ({ data }: { data?: ResponseContracts }) => {
  const statsItems = [
    {
      title: '전체',
      count: data?.summary.total ?? 0,
      color: '#111827',
    },
    {
      title: '위험',
      count: data?.summary.high ?? 0,
      color: '#EF4444',
    },
    {
      title: '주의',
      count: data?.summary.medium ?? 0,
      color: '#F59E0B',
    },
    {
      title: '안전',
      count: data?.summary.low ?? 0,
      color: '#059669',
    },
  ];

  return (
    <div className='flex items-center gap-4'>
      {statsItems.map((item) => (
        <section
          key={item.title}
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
