// AdminLayout.tsx
import { getMyInfo } from '@/api/auth';
import AdminSidebar from '@/components/layouts/AdminSidebar';
import { useQuery } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  const { data } = useQuery({
    queryKey: ['myInfo'],
    queryFn: getMyInfo,
  });

  console.log('AdminLayout - myInfo:', data);

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
