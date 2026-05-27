import { ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContractItem from './ContractItem';
import type { ResponseDashboard } from '@/types/dashboard';

const ContractList = ({ data }: { data: ResponseDashboard }) => {
  const sortedItems = [...data.recentContracts]
    .sort((a, b) => new Date(b.analyzedAt).getTime() - new Date(a.analyzedAt).getTime())
    .slice(0, 3);

  return (
    <section className='border-light-gray w-full rounded-3xl border bg-white py-4 shadow-lg sm:py-6'>
      <header className='mb-4 flex items-center justify-between px-6 sm:px-8'>
        <h3 className='text-dark text-xl font-bold sm:text-2xl'>최근 분석한 계약서</h3>
        <Link
          to='/contracts'
          className='group text-primary flex items-center gap-1 text-sm font-semibold transition hover:brightness-90 active:brightness-75'
        >
          전체 보기
          <span className='transition-transform duration-300 group-hover:translate-x-1'>
            <ArrowRight size={16} />
          </span>
        </Link>
      </header>

      <div className='bg-light-gray my-4 h-px flex-1 sm:my-6' />

      {sortedItems.length === 0 ? (
        <div className='flex flex-col items-center justify-center p-6 text-center'>
          <div className='bg-gray-100 mb-4 rounded-2xl p-3 sm:p-4'>
            <FileText className='text-gray-400 sm:h-8 sm:w-8 h-6 w-6' />
          </div>

          <h4 className='text-dark mb-2 sm:text-lg font-semibold'>아직 분석한 계약서가 없습니다</h4>
        </div>
      ) : (
        sortedItems.map((item, index) => (
          <ContractItem
            key={item.contractId}
            item={item}
            isLast={index === sortedItems.length - 1}
          />
        ))
      )}
    </section>
  );
};

export default ContractList;
