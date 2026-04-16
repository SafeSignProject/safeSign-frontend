import { contractsKeywordAtom, contractsSortAtom } from '@/atoms';
import { Button, Input } from '@/components/common';
import { useAtom } from 'jotai';
import { Funnel, Check } from 'lucide-react';
import { useState } from 'react';

const ContractsSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [keyword, setKeyword] = useAtom(contractsKeywordAtom);
  const [selectedMenu, setSelectedMenu] = useAtom(contractsSortAtom);

  const menus = ['최신순', '오래된순', '위험도 높은순', '위험도 낮은순'];

  return (
    <div className='relative flex items-center gap-4'>
      <Input
        isSearch={true}
        placeholder='계약서 검색...'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <div className='relative'>
        <Button
          type='button'
          label='정렬'
          className='border-light-gray h-10.5 border whitespace-nowrap hover:brightness-95 active:brightness-90'
          icon={<Funnel size={16} />}
          onClick={() => setIsOpen((prev) => !prev)}
        />

        {isOpen && (
          <div className='border-light-gray absolute right-0 z-10 mt-2 w-44 overflow-hidden rounded-lg border bg-white py-1 shadow-md'>
            {menus.map((menu) => {
              const isActive = selectedMenu === menu;

              return (
                <button
                  key={menu}
                  className='flex w-full items-center justify-between bg-white px-4 py-2 text-left text-sm hover:brightness-95'
                  onClick={() => {
                    setSelectedMenu(menu);
                    setIsOpen(false);
                  }}
                >
                  <span className='text-dark font-medium'>{menu}</span>

                  {isActive && <Check size={16} className='text-primary' />}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContractsSearch;
