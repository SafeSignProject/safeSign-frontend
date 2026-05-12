import { dashboardStats } from '@/constants/admin';
import clsx from 'clsx';
import { TrendingUp } from 'lucide-react';

const DashboardStats = () => {
  return (
    <section className='grid grid-cols-3 gap-6'>
      {dashboardStats.map((stat) => (
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
