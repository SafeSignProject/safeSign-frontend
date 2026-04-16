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
      <section className='group flex items-center justify-between px-8'>
        <div className='flex items-center gap-5'>
          <div className='inline-block rounded-2xl p-3.5' style={{ backgroundColor: style.iconBg }}>
            <FileText size={28} style={{ color: style.color }} />
          </div>

          <div className='flex flex-col gap-1'>
            <h5 className='text-dark group-hover:text-primary text-lg font-bold transition'>
              {item.title}
            </h5>

            <div className='flex items-center gap-3'>
              <p className='text-dark-gray flex items-center gap-1.5 text-sm'>
                <Clock size={16} /> {item.date}
              </p>

              {item.riskCount > 0 && (
                <p
                  className='flex items-center gap-1.5 text-sm font-medium'
                  style={{ color: style.color }}
                >
                  <TriangleAlert size={16} />
                  위험 {item.riskCount}개
                </p>
              )}
            </div>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <div className='flex flex-col'>
            <p className='text-dark-gray text-right text-sm'>위험도</p>
            <h3 className='text-dark text-3xl font-bold'>{item.score}점</h3>
          </div>

          <div
            className='flex h-9.5 items-center justify-center rounded-xl border px-4 text-sm font-bold'
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
            state={{
              title: item.title,
              score: item.score,
              level: style.level,
            }}
          >
            <ArrowRight
              size={20}
              className='ransition-transform group-hover:text-primary cursor-pointer text-[#D1D5DB] transition duration-300 group-hover:translate-x-2 active:brightness-75'
            />
          </Link>
        </div>
      </section>

      {!isLast && <div className='bg-light-gray my-6 h-px flex-1' />}
    </>
  );
};

export default ContractItem;
