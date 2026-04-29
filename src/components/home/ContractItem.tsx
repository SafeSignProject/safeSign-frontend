import { ArrowRight, Clock, FileText, TriangleAlert } from 'lucide-react';
import { getRiskStyle } from '@/utils/getRisk';
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

const ContractItem = ({ item, isLast }: ContractItemProps) => {
  const style = getRiskStyle(item.score);

  return (
    <>
      <section className='group flex items-center justify-between px-6 max-sm:flex-col max-sm:items-start max-sm:gap-3 sm:px-8'>
        <div className='flex w-full items-center gap-3 sm:gap-5'>
          <div
            className='inline-block h-12 w-12 shrink-0 rounded-2xl p-3.5 sm:h-14 sm:w-14'
            style={{ backgroundColor: style.iconBg }}
          >
            <FileText className='h-full w-full' style={{ color: style.color }} />
          </div>

          <div className='flex w-full flex-col gap-1'>
            <div className='flex w-full items-center justify-between'>
              <h5 className='text-dark group-hover:text-primary font-bold transition sm:text-lg'>
                {item.title}
              </h5>
              <Link
                to={`/contracts/${item.id}`}
                state={{ title: item.title, score: item.score, level: style.level }}
              >
                <ArrowRight
                  size={20}
                  className='ransition-transform group-hover:text-primary cursor-pointer text-[#D1D5DB] transition duration-300 group-hover:translate-x-2 active:brightness-75 sm:hidden'
                />
              </Link>
            </div>

            <div className='flex items-center gap-3'>
              <p className='text-dark-gray flex items-center gap-1.5 text-sm whitespace-nowrap'>
                <Clock size={16} /> {item.date}
              </p>

              {item.riskCount > 0 && (
                <p
                  className='flex items-center gap-1.5 text-sm font-medium whitespace-nowrap'
                  style={{ color: style.color }}
                >
                  <TriangleAlert size={16} />
                  위험 {item.riskCount}개
                </p>
              )}
            </div>
          </div>
        </div>

        <div className='flex items-center gap-3 max-sm:pl-15 sm:gap-4'>
          <div className='flex max-sm:items-center max-sm:gap-1 sm:flex-col'>
            <p className='text-dark-gray text-right text-sm'>위험도</p>
            <h3 className='text-dark font-bold sm:text-3xl'>{item.score}점</h3>
          </div>

          <div
            className='flex h-7 items-center justify-center rounded-xl px-3 text-sm font-bold whitespace-nowrap sm:h-9.5 sm:border sm:px-4'
            style={{
              backgroundColor: style.badgeBg,
              borderColor: style.border,
              color: style.color,
            }}
          >
            {style.level}
          </div>

          <Link
            to={`/contracts/${item.id}`}
            state={{ title: item.title, score: item.score, level: style.level }}
          >
            <ArrowRight
              size={20}
              className='ransition-transform group-hover:text-primary cursor-pointer text-[#D1D5DB] transition duration-300 group-hover:translate-x-2 active:brightness-75 max-sm:hidden'
            />
          </Link>
        </div>
      </section>

      {!isLast && <div className='bg-light-gray my-4 h-px flex-1 sm:my-6' />}
    </>
  );
};

export default ContractItem;
