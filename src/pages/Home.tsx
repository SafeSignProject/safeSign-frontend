import { CheckList, ContractList, StatistList, RedirectList } from '@/components/home';

export const Home = () => {
  return (
    <main className='flex min-h-screen justify-center bg-[#F9FAFB] px-8 pt-32'>
      <div>
        <header className='mb-8 space-y-4'>
          <h1 className='text-dark text-center text-5xl leading-12 font-bold'>
            안녕하세요, <span className='text-primary'>김철수</span>님
          </h1>
          <p className='text-dark-gray text-center text-xl leading-7'>
            오늘도 안전한 계약을 위해 함께해요
          </p>
        </header>

        <StatistList />
        <RedirectList />
        <ContractList />
        <CheckList />
      </div>
    </main>
  );
};
