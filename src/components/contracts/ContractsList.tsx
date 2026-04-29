import { CONTRACTS_ITEM } from '@/mocks/data';
import ContractsItem from '@/components/contracts/ContractsItem';
import { useAtom } from 'jotai';
import { contractsKeywordAtom, contractsSortAtom } from '@/atoms';
import { useEffect, useState } from 'react';
import { FileText } from 'lucide-react';

const ContractsList = () => {
  const [keyword] = useAtom(contractsKeywordAtom);
  const [sort] = useAtom(contractsSortAtom);
  const [debouncedKeyword, setDebouncedKeyword] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedKeyword(keyword);
    }, 500);

    return () => clearTimeout(timer);
  }, [keyword]);

  const filtered = CONTRACTS_ITEM.filter((item) =>
    item.title.toLowerCase().includes(debouncedKeyword.toLowerCase()),
  );

  const sorted = [...filtered].sort((a, b) => {
    switch (sort) {
      case '오래된순':
        return new Date(a.date).getTime() - new Date(b.date).getTime();

      case '최신순':
        return new Date(b.date).getTime() - new Date(a.date).getTime();

      case '위험도 높은순':
        return b.score - a.score;

      case '위험도 낮은순':
        return a.score - b.score;

      default:
        return 0;
    }
  });

  const isEmpty = sorted.length === 0;

  return isEmpty ? (
    <section className='flex flex-col items-center justify-center pt-12 text-center sm:pt-16'>
      <FileText size={48} strokeWidth={1.5} className='text-[#D1D5DB]' />
      <p className='text-dark mt-4 text-lg leading-7 font-medium'>검색 결과가 없습니다</p>
      <p className='text-dark-gray mt-2 text-sm'>다른 키워드로 검색해보세요</p>
    </section>
  ) : (
    <section className='border-light-gray rounded-sm border bg-white'>
      {sorted.map((item, index) => (
        <ContractsItem key={item.id} item={item} isLast={index === sorted.length - 1} />
      ))}
    </section>
  );
};

export default ContractsList;
