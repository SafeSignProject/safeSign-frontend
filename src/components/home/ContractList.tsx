import { CONTRACTS_ITEM } from '@/mocks/data';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContractItem from './ContractItem';

const ContractList = () => {
  const sortedItems = [...CONTRACTS_ITEM]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
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

      {sortedItems.map((item, index) => (
        <ContractItem key={item.id} item={item} isLast={index === sortedItems.length - 1} />
      ))}
    </section>
  );
};

export default ContractList;
