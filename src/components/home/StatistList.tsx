import { STATISTICS_ITEM } from '@/constants/home';

const StatistList = () => {
  return (
    <section className='mb-16 grid grid-cols-3 gap-6'>
      {STATISTICS_ITEM.map(({ title, value, desc, Icon, SubIcon }) => (
        <div
          key={title}
          className='border-light-gray w-88 rounded-3xl border bg-white p-8 shadow-lg'
        >
          <article className='mb-4 flex items-center justify-between'>
            <div className='text-primary rounded-2xl bg-[#F0FDF7] p-3.5'>
              <Icon size={28} />
            </div>
            <SubIcon size={20} className='text-primary' />
          </article>

          <p className='text-dark-gray mb-2 text-sm font-medium'>{title}</p>
          <h5 className='text-dark mb-1 text-4xl leading-10 font-bold'>{value}</h5>
          <p className='text-xs leading-4 text-[#9CA3AF]'>{desc}</p>
        </div>
      ))}
    </section>
  );
};

export default StatistList;
