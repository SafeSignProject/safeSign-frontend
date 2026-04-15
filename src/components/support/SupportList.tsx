import { SUPPORT_ITEMS } from '@/mocks/supportItem';
import { SquareArrowOutUpRight } from 'lucide-react';
import { Badge } from '../common';

const SupportList = () => {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
      {SUPPORT_ITEMS.map((item) => (
        <section key={item.id} className='border-light-gray rounded-lg border bg-white p-6'>
          <div className='mb-0.5 flex items-center justify-between'>
            <h5 className='text-dark text-lg leading-7 font-semibold'>{item.title}</h5>
            <a
              href={item.url}
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary transition hover:scale-110'
            >
              <SquareArrowOutUpRight size={16} strokeWidth={1.5} />
            </a>
          </div>
          <p className='text-dark-gray text-xs leading-4'>{item.organization}</p>
          <p className='my-3 line-clamp-6 text-sm text-[#4B5563]'>{item.description}</p>
          <div className='my-4 flex items-center gap-3 rounded-sm bg-[#F9FAFB] p-3'>
            <div className='flex-1'>
              <p className='text-dark-gray text-xs leading-4'>지원금액</p>
              <p className='text-dark text-sm font-medium'>{item.support.amount}</p>
            </div>
            <div className='flex-1'>
              <p className='text-dark-gray text-xs leading-4'>지원기간</p>
              <p className='text-dark text-sm font-medium'>{item.support.period}</p>
            </div>
          </div>
          <div className='mt-3 flex flex-wrap gap-2'>
            {item.tags.map((tag, idx) => (
              <Badge
                key={idx}
                tag={true}
                className='text-primary bg-[#E8F9F0] text-xs'
                label={tag}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default SupportList;
