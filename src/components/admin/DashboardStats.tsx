import { dashboardStats } from '@/constants/admin';
import clsx from 'clsx';
import { TrendingUp } from 'lucide-react';
import { useAdminDashboard } from '@/hooks/useAdminDashboard';

const DashboardStats = () => {
  const { data } = useAdminDashboard();
  const summary = data?.summary;

  const formatNum = (num: number) => num.toLocaleString('ko-KR');

  // 단일 switch-case 문을 통해 각 카드별 속성 오버라이드를 한곳에서 명확하게 처리합니다.
  const stats = dashboardStats.map((stat) => {
    if (!summary) return stat;

    switch (stat.title) {
      case '전체 가입자 수':
        return {
          ...stat,
          value: formatNum(summary.totalUserCount),
          desc: `어제 대비 ${summary.userIncreaseFromYesterday}명 증가`,
          isUp: summary.userIncreaseFromYesterday > 0,
        };
      case '누적 분석 완료 건수':
        return {
          ...stat,
          value: formatNum(summary.totalAnalysisCompletedCount),
          isUp: true,
        };
      case '오늘 등록된 계약서': {
        const rate = summary.todayContractIncreaseRate;
        const formattedRate = Math.abs(rate).toLocaleString('ko-KR', {
          minimumFractionDigits: 0,
          maximumFractionDigits: 1,
        });
        return {
          ...stat,
          value: formatNum(summary.todayContractCount),
          desc: `평균 대비 ${formattedRate}% ${rate >= 0 ? '증가' : '감소'}`,
          isUp: rate > 0,
        };
      }
      default:
        return stat;
    }
  });

  return (
    <section className='grid grid-cols-3 gap-6'>
      {stats.map((stat) => (
        <article key={stat.title} className='rounded-xl border border-light-gray bg-white p-6'>
          <div className='flex items-start justify-between'>
            <p className='text-sm text-dark-gray leading-5'>{stat.title}</p>

            <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-[#E8F9F0] text-primary'>
              {stat.icon}
            </div>
          </div>

          <div className='mt-8 flex items-end gap-1 mb-2.5'>
            <h2 className='text-3xl font-semibold leading-none text-dark'>{stat.value}</h2>
            <span className='text-sm text-dark-gray'>{stat.unit}</span>
          </div>

          <p
            className={clsx(
              'text-sm flex items-center gap-1',
              stat.isUp ? 'text-primary' : 'text-dark-gray',
            )}
          >
            {stat.isUp && <TrendingUp size={12} />}
            {stat.desc}
          </p>
        </article>
      ))}
    </section>
  );
};

export default DashboardStats;
