import { Logo } from '@/assets';
import clsx from 'clsx';
import { FileText, House, TrendingUp, Upload, User, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ITEMS = [
  { name: '홈', path: '/', icon: House },
  { name: '업로드', path: '/upload', icon: Upload },
  { name: '계약서', path: '/contracts', icon: FileText },
  { name: '지원', path: '/support', icon: TrendingUp },
  { name: '마이', path: '/my', icon: User },
];

interface HeaderProps {
  showAuthButtons?: boolean;
}

const Header = ({ showAuthButtons = false }: HeaderProps) => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // 브라우저 크기 변하면 자동으로 false 처리
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    const handleResize = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setIsOpen(false);
      }
    };

    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return (
    <nav className='border-b-light-gray fixed top-0 left-0 z-40 flex h-16 w-full items-center justify-between border-b bg-white px-4 sm:px-8'>
      <Link to='/' className='flex items-center gap-2'>
        <Logo height={32} width={25.5313} />
        <span className='text-dark text-lg font-semibold'>SafeSign</span>
      </Link>
      {showAuthButtons ? (
        <div className='flex items-center gap-2 sm:gap-3'>
          <Link
            to='/login'
            className='hover:text-dark px-3 py-1.5 text-sm text-dark-gray transition-colors sm:px-4 sm:py-2'
          >
            로그인
          </Link>
          <Link
            to='/signup'
            className='rounded-lg bg-primary px-3 py-1.5 text-sm text-white transition hover:brightness-95 active:brightness-90 sm:px-5 sm:py-2.5'
          >
            회원가입
          </Link>
        </div>
      ) : (
        <>
          <section className='hidden items-center gap-1 md:flex'>
            {ITEMS.map(({ name, path, icon: Icon }) => {
              const isActive = pathname === path;

              return (
                <Link
                  key={path}
                  to={path}
                  className={clsx(
                    'flex h-9 items-center gap-2 rounded-sm px-4 whitespace-nowrap transition hover:brightness-95 active:brightness-90',
                    isActive ? 'bg-accent text-primary' : 'text-dark-gray bg-white',
                  )}
                >
                  <Icon size={16} />
                  <p className='text-sm'>{name}</p>
                </Link>
              );
            })}
          </section>

          <button
            className='rounded-full bg-white p-1 transition hover:brightness-90 md:hidden'
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </>
      )}

      <div
        className={clsx(
          'border-light-gray absolute top-16 left-0 z-40 w-full border-b bg-white shadow-md md:hidden',
          'transform transition-all duration-300 ease-out',
          isOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0',
        )}
      >
        {ITEMS.map(({ name, path, icon: Icon }) => {
          const isActive = pathname === path;

          return (
            <Link
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              className={clsx(
                'flex items-center gap-3 px-6 py-4 transition hover:bg-gray-50 active:bg-gray-100',
                isActive ? 'bg-accent text-primary' : 'text-dark-gray',
              )}
            >
              <Icon size={18} />
              <span>{name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Header;
