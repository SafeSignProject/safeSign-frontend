import AdminSidebar from '@/components/layouts/AdminSidebar';
import useMyInfo from '@/hooks/useMyInfo';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const AdminLayout = () => {
  const navigate = useNavigate();

  const { token, data, isLoading } = useMyInfo();

  // 토큰 자체가 없으면 로그인으로
  useEffect(() => {
    if (!token) {
      navigate('/login', { replace: true });
    }
  }, [token, navigate]);

  // ADMIN 아니면 홈으로
  useEffect(() => {
    if (!isLoading && data) {
      if (data.role !== 'ADMIN') {
        navigate('/', { replace: true });
      }
    }
  }, [data, isLoading, navigate]);

  // 아직 권한 확인 중이면 아무것도 안 보여줌
  if (!token || isLoading) return null;

  return (
    <div className='flex min-h-screen bg-[#F9FAFB]'>
      <AdminSidebar />

      <main className='ml-66.25 flex-1'>
        <div className='mx-auto w-full max-w-7xl'>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
