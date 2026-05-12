import { analysisFilterAtom } from '@/atoms';
import { Button } from '../common';
import { useAtom } from 'jotai';
import { Check, ChevronDown, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

interface AnalysisFilterModalProps {
  onClose: () => void;
}

const DEFAULT_FILTER = {
  period: '전체기간',
  status: '전체',
};

const AnalysisFilterModal = ({ onClose }: AnalysisFilterModalProps) => {
  const [filter, setFilter] = useAtom(analysisFilterAtom);
  const [isOpenPeriodMenu, setIsOpenPeriodMenu] = useState(false);
  const [isOpenStatusMenu, setIsOpenStatusMenu] = useState(false);
  const [selectedPeriodMenu, setSelectedPeriodMenu] = useState(filter.period);
  const [selectedStatusMenu, setSelectedStatusMenu] = useState(filter.status);

  const periodMenus = ['전체기간', '오늘', '최근 7일', '최근 30일'];
  const statusMenus = ['전체', '성공', '실패'];

  const handleReset = () => {
    setSelectedPeriodMenu(DEFAULT_FILTER.period);
    setSelectedStatusMenu(DEFAULT_FILTER.status);

    setFilter(DEFAULT_FILTER);
  };

  const handleApply = () => {
    setFilter({
      period: selectedPeriodMenu,
      status: selectedStatusMenu,
    });
  };

  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0px';
    };
  }, []);

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/40'
      onClick={onClose}
    >
      <div
        className='flex w-md max-w-[90%] flex-col space-y-6 overflow-visible rounded-xl bg-white p-6'
        onClick={(e) => e.stopPropagation()}
      >
        <article className='flex items-center justify-between'>
          <p className='text-lg leading-7 font-semibold text-dark'>분석 로그 검색 필터</p>

          <button
            type='button'
            onClick={onClose}
            className='rounded-full bg-white p-1 text-dark-gray transition hover:brightness-95 active:brightness-90'
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </article>

        {/* 기간 설정 */}
        <article className='flex flex-col gap-2'>
          <p className='text-sm leading-5 font-medium text-dark-gray'>기간 설정</p>

          <div className='relative w-full'>
            <button
              type='button'
              className='flex rounded-lg items-center w-full justify-between border border-light-gray bg-white px-4 py-3 text-left transition hover:brightness-95 active:brightness-90'
              onClick={() => {
                setIsOpenPeriodMenu((prev) => !prev);
                setIsOpenStatusMenu(false);
              }}
            >
              {selectedPeriodMenu}
              <ChevronDown
                size={20}
                className={clsx(
                  'text-dark-gray transform transition-transform duration-300 ease-in-out',
                  isOpenPeriodMenu ? 'rotate-180' : 'rotate-0',
                )}
              />
            </button>

            {isOpenPeriodMenu && (
              <div className='absolute top-full left-0 z-10 mt-2 w-full overflow-hidden rounded-lg border border-light-gray bg-white py-1 shadow-md'>
                {periodMenus.map((menu) => {
                  const isActive = selectedPeriodMenu === menu;

                  return (
                    <button
                      key={menu}
                      className='flex w-full items-center justify-between px-4 py-2 text-left text-sm hover:bg-gray-50'
                      onClick={() => {
                        setSelectedPeriodMenu(menu);
                        setIsOpenPeriodMenu(false);
                      }}
                    >
                      <span className='font-medium text-dark'>{menu}</span>

                      {isActive && <Check size={16} className='text-primary' />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </article>

        {/* 상태 설정 */}
        <article className='flex flex-col gap-2'>
          <p className='text-sm leading-5 font-medium text-dark-gray'>상태</p>

          <div className='relative w-full'>
            <button
              type='button'
              className='flex rounded-lg items-center w-full justify-between border border-light-gray bg-white px-4 py-3 text-left transition hover:brightness-95 active:brightness-90'
              onClick={() => {
                setIsOpenStatusMenu((prev) => !prev);
                setIsOpenPeriodMenu(false);
              }}
            >
              {selectedStatusMenu}
              <ChevronDown
                size={20}
                className={clsx(
                  'text-dark-gray transform transition-transform duration-300 ease-in-out',
                  isOpenStatusMenu ? 'rotate-180' : 'rotate-0',
                )}
              />
            </button>

            {isOpenStatusMenu && (
              <div className='absolute top-full left-0 z-10 mt-2 w-full overflow-hidden rounded-lg border border-light-gray bg-white py-1 shadow-md'>
                {statusMenus.map((menu) => {
                  const isActive = selectedStatusMenu === menu;

                  return (
                    <button
                      key={menu}
                      className='flex w-full items-center justify-between bg-white px-4 py-2 text-left text-sm hover:bg-gray-50'
                      onClick={() => {
                        setSelectedStatusMenu(menu);
                        setIsOpenStatusMenu(false);
                      }}
                    >
                      <span className='font-medium text-dark'>{menu}</span>

                      {isActive && <Check size={16} className='text-primary' />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </article>

        <article className='flex items-center justify-end gap-3'>
          <Button
            type='button'
            label='초기화'
            onClick={handleReset}
            className='rounded-lg border border-light-gray bg-white py-2.5 font-medium leading-6 text-dark-gray hover:brightness-95 active:brightness-90'
          />
          <Button
            type='button'
            label='적용하기'
            onClick={handleApply}
            className='rounded-lg bg-dark py-2.5 font-medium leading-6 text-white hover:brightness-95 active:brightness-90'
          />
        </article>
      </div>
    </div>
  );
};

export default AnalysisFilterModal;
