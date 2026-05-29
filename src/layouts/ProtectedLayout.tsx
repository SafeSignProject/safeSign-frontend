import { Header } from '@/components/layouts';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import useMyInfo from '@/hooks/useMyInfo';
import { useEffect } from 'react';
import { Outlet, useLocation, Navigate, useNavigate } from 'react-router-dom';

const ProtectedLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { getAccessToken } = useLocalStorage();

  const token = getAccessToken();

  const { data, isLoading } = useMyInfo();

  // ADMIN 아니면 홈으로
  useEffect(() => {
    if (data?.role === 'ADMIN') {
      navigate('/dashboard', { replace: true });
    }
  }, [data, isLoading, navigate]);

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
