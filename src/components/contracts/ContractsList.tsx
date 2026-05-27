import { FileText } from 'lucide-react';
import ContractsItem from '@/components/contracts/ContractsItem';
import type { ResponseContracts } from '@/types/contracts';

interface ContractsListProps {
  data?: ResponseContracts;
}

const ContractsList = ({ data }: ContractsListProps) => {
  const contracts = data?.contracts ?? [];

  const isEmpty = contracts.length === 0;

  return isEmpty ? (
    <section className='flex flex-col items-center justify-center pt-12 text-center sm:pt-16'>
      <FileText size={48} strokeWidth={1.5} className='text-[#D1D5DB]' />
      <p className='text-dark mt-4 text-lg leading-7 font-medium'>검색 결과가 없습니다</p>
      <p className='text-dark-gray mt-2 text-sm'>다른 키워드로 검색해보세요</p>
    </section>
  ) : (
    <section className='border-light-gray rounded-sm border bg-white'>
      {contracts.map((item, index) => (
        <ContractsItem key={item.contractId} item={item} isLast={index === contracts.length - 1} />
      ))}
    </section>
  );
};

export default ContractsList;
