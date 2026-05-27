import { useEffect, useState } from 'react';
import { useAtomValue, useSetAtom } from 'jotai';
import { useQuery } from '@tanstack/react-query';
import { getContracts } from '@/api/contract';
import { contractsKeywordAtom, contractsSortAtom, resetContractsAtom } from '@/atoms';
import { ContractsList, ContractsSearch, ContractsStats } from '@/components/contracts';
import CommonHeader from '@/components/header/CommonHeader';

const ContractsPage = () => {
  const resetContracts = useSetAtom(resetContractsAtom);

  const keyword = useAtomValue(contractsKeywordAtom);

  const sort = useAtomValue(contractsSortAtom);

  const [debouncedKeyword, setDebouncedKeyword] = useState('');

  // debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedKeyword(keyword);
    }, 500);

    return () => clearTimeout(timer);
  }, [keyword]);

  // 페이지 나갈 때 초기화
  useEffect(() => {
    return () => {
      resetContracts();
    };
  }, [resetContracts]);

  const getSortValue = (sort: string): 'latest' | 'oldest' | 'riskDesc' | 'riskAsc' => {
    switch (sort) {
      case '최신순':
        return 'latest';

      case '오래된순':
        return 'oldest';

      case '위험도 높은순':
        return 'riskDesc';

      case '위험도 낮은순':
        return 'riskAsc';

      default:
        return 'latest';
    }
  };

  const params = {
    keyword: debouncedKeyword,
    sort: getSortValue(sort),
  };

  const { data } = useQuery({
    queryKey: ['contracts', params],

    queryFn: () => getContracts(params),

    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });

  return (
    <main className='flex min-h-screen justify-center bg-[#F9FAFB]'>
      <CommonHeader title='내 계약서' desc='분석된 모든 계약서를 확인하고 관리하세요' />

      <div className='mt-44 mb-8 w-275 space-y-4 px-4 sm:space-y-8 sm:p-8'>
        <ContractsSearch />

        <ContractsStats data={data} />

        <ContractsList data={data} />
      </div>
    </main>
  );
};

export default ContractsPage;
