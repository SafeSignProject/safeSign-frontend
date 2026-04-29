import { getRiskBadgeStyle } from '@/utils/getRisk';

interface CommonHeaderProps {
  title: string;
  desc: string;
  riskState?: {
    score: number;
    level: string;
  };
}

const CommonHeader = ({ title, desc, riskState }: CommonHeaderProps) => {
  const style = getRiskBadgeStyle(riskState?.score ?? 0);

  return (
    <header className='border-light-gray fixed top-16 z-30 w-full border-b bg-white p-4 sm:px-8 sm:py-6'>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col gap-1'>
          <h3 className='text-dark text-xl leading-8 font-bold sm:text-2xl'>{title}</h3>
          <p className='text-dark-gray leading-6'>{desc}</p>
        </div>

        {riskState && (
          <div className='flex items-center gap-4'>
            <div className='flex flex-col'>
              <p className='text-dark-gray text-right text-sm'>위험도 점수</p>
              <h3 className='text-dark text-right text-xl font-semibold sm:text-2xl'>
                {riskState?.score}점
              </h3>
            </div>
            <div
              className='flex h-8 items-center justify-center rounded-sm px-2 max-sm:text-sm sm:h-9.5 sm:px-4'
              style={{
                backgroundColor: style.badgeBg,
                color: style.color,
              }}
            >
              {riskState?.level}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default CommonHeader;
