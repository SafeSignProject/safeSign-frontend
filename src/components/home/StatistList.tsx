import { STATISTICS_ITEM } from '@/mocks/data';

const StatistList = () => {
  return (
    <section className='mb-16 flex items-center justify-center gap-6'>
      {STATISTICS_ITEM.map(({ title, value, desc, Icon, SubIcon }) => (
        <div
          key={title}
          className='group border-light-gray w-88 rounded-3xl border bg-white p-8 shadow-lg transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl'
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
  );
};

export default StatistList;
