import { CheckList, ContractList, StatistList, RedirectList } from '@/components/home';

const HomePage = () => {
  return (
    <main className='flex min-h-screen justify-center bg-[#F9FAFB] pt-28 sm:pt-32'>
      <div className='w-full max-w-6xl px-4 sm:px-6'>
        <header className='mb-8 space-y-2 sm:space-y-4'>
          <h1 className='text-dark text-center text-3xl leading-10 font-bold sm:text-5xl sm:leading-12'>
            안녕하세요, <span className='text-primary'>김철수</span>님
          </h1>
          <p className='text-dark-gray text-center text-base leading-7 sm:text-xl'>
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

export default HomePage;
