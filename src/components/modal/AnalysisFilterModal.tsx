import { Check, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../common';

interface AnalysisFilterModalProps {
  onClose: () => void;
}

const AnalysisFilterModal = ({ onClose }: AnalysisFilterModalProps) => {
  const [isOpenPeriodMenu, setIsOpenPeriodMenu] = useState(false);
  const [isOpenStatusMenu, setIsOpenStatusMenu] = useState(false);
  const [selectedPeriodMenu, setSelectedPeriodMenu] = useState('전체기간');
  const [selectedStatusMenu, setSelectedStatusMenu] = useState('전체');

  const periodMenus = ['전체기간', '오늘', '최근 7일', '최근 30일'];
  const statusMenus = ['전체', '성공', '실패'];

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/40'
      onClick={onClose}
    >
      <div
        className='flex w-md max-w-[90%] flex-col space-y-5 overflow-visible rounded-xl bg-white p-6'
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
              className='w-full rounded-lg border border-light-gray bg-white px-4 py-3 text-left transition hover:brightness-95 active:brightness-90'
              onClick={() => {
                setIsOpenPeriodMenu((prev) => !prev);
                setIsOpenStatusMenu(false);
              }}
            >
              {selectedPeriodMenu}
            </button>

            {isOpenPeriodMenu && (
              <div className='absolute top-full left-0 z-10 mt-2 w-full overflow-hidden rounded-lg border border-light-gray bg-white py-1 shadow-md'>
                {periodMenus.map((menu) => {
                  const isActive = selectedPeriodMenu === menu;

                  return (
                    <button
                      key={menu}
                      className='flex w-full items-center justify-between bg-white px-4 py-2 text-left text-sm hover:bg-gray-50'
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
              className='w-full rounded-lg border border-light-gray bg-white px-4 py-3 text-left transition hover:brightness-95 active:brightness-90'
              onClick={() => {
                setIsOpenStatusMenu((prev) => !prev);
                setIsOpenPeriodMenu(false);
              }}
            >
              {selectedStatusMenu}
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
            className='border border-light-gray bg-white text-dark-gray hover:brightness-95 active:brightness-90 py-2.5 rounded-lg leading-6 font-medium'
          />
          <Button
            type='button'
            label='적용하기'
            className=' bg-dark text-white hover:brightness-95 active:brightness-90 py-2.5 rounded-lg leading-6 font-medium'
          />
        </article>
      </div>
    </div>
  );
};

export default AnalysisFilterModal;
