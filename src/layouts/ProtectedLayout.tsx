import { Header } from '@/components/layouts';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Outlet, useLocation, Navigate } from 'react-router-dom';

const ProtectedLayout = () => {
  const location = useLocation();

  const { getAccessToken } = useLocalStorage();

  const token = getAccessToken();

  // 홈("/")은 랜딩으로
  if (!token && location.pathname === '/') {
    return <Navigate to='/landing' replace />;
  }

  // 그 외 보호 페이지는 로그인으로
  if (!token) {
    return <Navigate to='/login' replace />;
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default ProtectedLayout;
