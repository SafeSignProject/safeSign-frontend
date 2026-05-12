import { Logo } from '@/assets';
import { Button, Modal } from '../common';
import { Activity, LayoutDashboard, LogOut, Users } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { showToast } from '@/utils/toast';

const menus = [
  {
    label: '대시보드',
    path: '/dashboard',
    icon: <LayoutDashboard size={20} />,
  },
  {
    label: 'AI 분석 관리',
    path: '/analysis-management',
    icon: <Activity size={20} />,
  },
  {
    label: '회원 관리',
    path: '/users-management',
    icon: <Users size={20} />,
  },
];

const AdminSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };

  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleLogout = () => {
    setIsLogoutModalOpen(false);
    navigate('/login');
    showToast.success('로그아웃되었습니다');
  };

  return (
    <aside className='fixed top-0 left-0 flex flex-col w-66.25 h-screen bg-white z-50 border-r border-light-gray'>
      <div>
        <div className='flex items-center gap-2 p-6'>
          <Logo width={25.53} height={32} />

          <div className='flex flex-col gap-1.5'>
            <h5 className='text-dark text-lg leading-7 font-semibold'>SafeSign</h5>

            <p className='text-dark-gray text-xs'>관리자 모드</p>
          </div>
        </div>

        <div className='h-px w-full bg-light-gray' />
      </div>

      <section className='flex-1 p-4'>
        <div className='flex flex-col gap-1'>
          {menus.map((menu) => {
            const active = isActive(menu.path);

            return (
              <Button
                key={menu.path}
                type='button'
                onClick={() => navigate(menu.path)}
                label={menu.label}
                icon={menu.icon}
                className={`
                  w-full justify-start rounded-lg py-3 gap-3
                  font-medium leading-6 transition
                  ${
                    active
                      ? 'bg-[#E8F9F0] text-primary hover:brightness-95'
                      : 'bg-white text-dark-gray hover:bg-gray-50'
                  }
                `}
              />
            );
          })}
        </div>
      </section>

      <div className='p-4 border-t border-light-gray'>
        <Button
          type='button'
          label='로그아웃'
          icon={<LogOut size={20} />}
          className='
            w-full justify-start rounded-lg py-3 gap-3 text-dark-gray font-medium leading-6 hover:bg-red-50 hover:text-red-500 transition'
          onClick={() => setIsLogoutModalOpen(true)}
        />
      </div>

      {isLogoutModalOpen && (
        <Modal
          title=' 로그아웃 하시겠습니까?'
          content='로그인 페이지로 돌아갑니다'
          buttonLabel='로그아웃'
          onConfirm={handleLogout}
          onCancel={() => setIsLogoutModalOpen(false)}
        />
      )}
    </aside>
  );
};

export default AdminSidebar;
