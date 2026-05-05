import { Header } from '@/components/layouts';
import { Outlet, useLocation } from 'react-router-dom';

const PublicLayout = () => {
  const { pathname } = useLocation();

  const isLanding = pathname === '/landing';

  return (
    <main className='flex min-h-screen items-center justify-center bg-[#F9FAFB]'>
      {isLanding && <Header showAuthButtons={true} />}
      <Outlet />
    </main>
  );
};

export default PublicLayout;
