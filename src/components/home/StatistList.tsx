import { FileText, TriangleAlert, TrendingUp, Sparkles, Zap, Award } from 'lucide-react';
import type { ResponseDashboard } from '@/types/dashboard';

const StatistList = ({ data }: { data: ResponseDashboard }) => {
  const statisticsItems = [
    {
      title: '전체 계약서',
      value: data.summary.totalContracts,
      desc: '총 분석 완료',
      Icon: FileText,
      SubIcon: Sparkles,
    },
    {
      title: '위험 계약서',
      value: data.summary.riskyContracts,
      desc: '주의 필요',
      Icon: TriangleAlert,
      SubIcon: Zap,
    },
    {
      title: '이번 달 분석',
      value: data.summary.monthlyAnalyses,
      desc: '활발한 활동 중',
      Icon: TrendingUp,
      SubIcon: Award,
    },
  ];

  return (
    <>
      <section className='mb-16 flex items-center justify-center gap-4 max-sm:hidden sm:gap-6'>
        {statisticsItems.map(({ title, value, desc, Icon, SubIcon }) => (
          <div
            key={title}
            className='group border-light-gray w-full rounded-3xl border bg-white p-8 shadow-lg transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl'
          >
            <article className='mb-4 flex items-center justify-between'>
              <div className='text-primary rounded-2xl bg-[#F0FDF7] p-3.5 transition-transform duration-500 group-hover:scale-110'>
                <Icon size={28} />
              </div>
              <div className='transition-transform duration-500 group-hover:translate-x-1'>
                <SubIcon size={20} className='text-primary' />
              </div>
            </article>

            <p className='text-dark-gray mb-2 text-sm font-medium'>{title}</p>
            <h5 className='text-dark mb-1 text-4xl leading-10 font-bold'>{value}</h5>
            <p className='text-xs leading-4 text-[#9CA3AF]'>{desc}</p>
          </div>
        ))}
      </section>

      <section className='border-light-gray mb-8 w-full rounded-3xl border bg-white py-6 shadow-lg sm:mb-16 sm:hidden'>
        {statisticsItems.map(({ title, value, desc, Icon }, index) => (
          <div key={title} className=''>
            <article className='flex items-center space-x-3 px-6'>
              <div className='text-primary h-12 w-12 rounded-2xl bg-[#F0FDF7] p-3.5'>
                <Icon className='h-full w-full' />
              </div>
              <div>
                <p className='text-dark-gray text-sm font-medium'>{title}</p>
                <p className='text-xs leading-4 text-[#9CA3AF]'>{desc}</p>
              </div>
              <h5 className='text-dark mb-1 text-2xl leading-10 font-bold sm:text-4xl'>{value}</h5>
            </article>

            {index !== statisticsItems.length - 1 && (
              <div className='bg-light-gray my-6 h-px flex-1' />
            )}
          </div>
        ))}
      </section>
    </>
  );
};

export default StatistList;
