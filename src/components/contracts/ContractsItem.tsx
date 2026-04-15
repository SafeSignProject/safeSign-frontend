import { TrashIcon } from '@/assets';
import { getRiskBadgeStyle } from '@/utils/getRisk';
import { Clock, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ContractItemProps {
  item: {
    id: number;
    title: string;
    date: string;
    riskCount: number;
    score: number;
  };
  isLast: boolean;
}

const ContractsItem = ({ item, isLast }: ContractItemProps) => {
  const style = getRiskBadgeStyle(item.score);

  return (
    <>
      <section className='py- flex items-center justify-between p-6'>
        <div className='flex items-center gap-4'>
          <FileText size={20} className='text-dark-gray' />

          <div className='flex flex-col gap-1'>
            <Link
              to={`/contracts/${item.id}`}
              className='text-dark leading-6 font-medium hover:underline'
            >
              {item.title}
            </Link>

            <div className='flex items-center gap-4'>
              <p className='text-dark-gray flex items-center gap-1.5 text-sm'>
                <Clock size={12} /> {item.date}
              </p>

              {item.riskCount > 0 && (
                <p className='text-dark-gray flex items-center gap-1.5 text-sm font-medium'>
                  <div className='bg-dark-gray h-1 min-w-1 rounded-full' />
                  위험 요쇼 {item.riskCount}개 발견
                </p>
              )}
            </div>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <div className='flex flex-col'>
            <p className='text-dark-gray text-right text-sm'>위험도</p>
            <h3 className='text-dark leading-6 font-medium'>{item.score}점</h3>
          </div>

          <div
            className='flex h-7 items-center justify-center rounded-sm px-3 text-sm'
            style={{
              backgroundColor: style.badgeBg,
              color: style.color,
            }}
          >
            {style.level}
          </div>

          <button className='cursor-pointer text-[#D1D5DB] transition hover:brightness-90 active:brightness-75'>
            <TrashIcon />
          </button>
        </div>
      </section>

      {!isLast && <div className='bg-light-gray h-px flex-1' />}
    </>
  );
};

export default ContractsItem;
