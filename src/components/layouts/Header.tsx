import { Logo } from '@/assets';
import clsx from 'clsx';
import { FileText, House, TrendingUp, Upload, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const ITEMS = [
  { name: '홈', path: '/', icon: House },
  { name: '업로드', path: '/upload', icon: Upload },
  { name: '계약서', path: '/contracts', icon: FileText },
  { name: '지원', path: '/support', icon: TrendingUp },
  { name: '마이', path: '/my', icon: User },
];

const Header = () => {
  const { pathname } = useLocation();

  return (
    <nav className='border-b-light-gray fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between border-b bg-white p-8'>
      <section className='flex items-center gap-2'>
        <Logo height={32} width={25.5313} />
        <span className='text-dark text-lg leading-7 font-semibold'>SafeSign</span>
      </section>

      <section className='flex items-center gap-1'>
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
              <p className='text-sm leading-5'>{name}</p>
            </Link>
          );
        })}
      </section>
    </nav>
  );
};

export default Header;
