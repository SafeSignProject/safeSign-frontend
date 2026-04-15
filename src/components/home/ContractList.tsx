import { CONTRACTS_ITEM } from '@/constants/home';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContractItem from './ContractItem';

const ContractList = () => {
  return (
    <section className='border-light-gray rounded-3xl border bg-white py-6 shadow-lg'>
      <header className='mb-4 flex items-center justify-between px-8'>
        <h3 className='text-dark text-2xl font-bold'>최근 분석한 계약서</h3>
        <Link
          to='/contracts'
          className='text-primary flex items-center gap-1 text-sm font-semibold transition hover:brightness-90 active:brightness-75'
        >
          전체 보기 <ArrowRight size={16} />
        </Link>
      </header>

      <div className='bg-light-gray my-6 h-px flex-1' />

      {CONTRACTS_ITEM.map((item, index) => (
        <ContractItem key={item.title} item={item} isLast={index === CONTRACTS_ITEM.length - 1} />
      ))}
    </section>
  );
};

export default ContractList;
