import { cn } from '@/utils/cn';
import type { ReactNode } from 'react';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  label: string;
  className?: string;
  icon?: ReactNode;
}

const Button = ({ label, type, className, icon }: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn(
        'flex items-center justify-center gap-2 rounded-sm px-4 py-2 leading-5',
        className,
      )}
    >
      {icon && <span className='flex items-center'>{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
