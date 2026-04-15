import { cn } from '@/utils/cn';
import type { InputHTMLAttributes, ReactNode } from 'react';
import { Search } from 'lucide-react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  isSearch?: boolean;
  icon?: ReactNode;
}

const Input = ({ label, error, className, id, isSearch, icon, ...props }: InputProps) => {
  return (
    <div className='flex flex-col gap-1'>
      {label && (
        <label htmlFor={id} className='text-dark mb-1 text-sm leading-5 font-medium'>
          {label}
        </label>
      )}

      <div className='relative'>
        {isSearch && (
          <span className='pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-[#6B7280]'>
            <Search size={20} />
          </span>
        )}

        {icon && (
          <span className='pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-[#6B7280]'>
            {icon}
          </span>
        )}

        <input
          id={id}
          className={cn(
            'h-10.5 w-full rounded-sm border px-4 py-2 transition outline-none',
            'border-light-gray placeholder:text-gray-400 focus:border-black',
            isSearch && 'pl-10',
            icon && 'pl-10',
            error && 'border-red-500 focus:border-red-500',
            className,
          )}
          {...props}
        />
      </div>

      {error && <p className='ml-1 text-xs text-red-500'>{error}</p>}
    </div>
  );
};

export default Input;
