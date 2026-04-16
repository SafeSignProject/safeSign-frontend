import { TrashIcon } from '@/assets';
import { getRiskBadgeStyle } from '@/utils/getRisk';
import { Clock, FileText } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from '@/components/common';
import { showToast } from '@/utils/toast';

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const style = getRiskBadgeStyle(item.score);

  return (
    <>
      <section className='py- flex items-center justify-between p-6'>
        <div className='flex items-center gap-4'>
          <FileText size={20} className='text-dark-gray' />

          <div className='flex flex-col gap-1'>
            <Link
              to={`/contracts/${item.id}`}
              state={{
                title: item.title,
                score: item.score,
                level: style.level,
              }}
              className='text-dark leading-6 font-medium hover:underline'
            >
              {item.title}
            </Link>

            <div className='flex items-center max-sm:flex-col sm:gap-4'>
              <p className='text-dark-gray flex items-center gap-1.5 text-sm'>
                <Clock size={12} /> {item.date}
              </p>

              {item.riskCount > 0 && (
                <div className='text-dark-gray flex items-center gap-1.5 text-sm font-medium'>
                  <div className='bg-dark-gray h-1 min-w-1 rounded-full' />
                  위험 요소 {item.riskCount}개 발견
                </div>
              )}
            </div>
          </div>
        </div>

        <div className='flex items-center gap-2.5'>
          <div className='mr-1.5 flex flex-col'>
            <p className='text-dark-gray text-right text-sm'>위험도</p>
            <h3 className='text-dark leading-6 font-medium'>{item.score}점</h3>
          </div>

          <div
            className='flex h-7 items-center justify-center rounded-sm px-3 text-sm whitespace-nowrap'
            style={{
              backgroundColor: style.badgeBg,
              color: style.color,
            }}
          >
            {style.level}
          </div>

          <button
            type='button'
            onClick={() => setIsModalOpen(true)}
            className='rounded-full bg-white p-1.5 text-[#D1D5DB] transition hover:brightness-95 active:brightness-90'
          >
            <TrashIcon />
          </button>
        </div>
      </section>

      {!isLast && <div className='bg-light-gray h-px flex-1' />}

      {isModalOpen && (
        <Modal
          title=' 계약서를 삭제하시겠습니까?'
          content='삭제 시 복구할 수 없습니다'
          onConfirm={() => {
            showToast.success('계약서가 삭제되었습니다');
            setIsModalOpen(false);
          }}
          onCancel={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default ContractsItem;
