import { cn } from '@/utils/cn';
import type { ReactNode } from 'react';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  label: string;
  className?: string;
  icon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ label, type, className, icon, onClick, disabled = false }: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        'flex items-center justify-center gap-2 rounded-sm bg-white px-4 py-2 transition outline-none disabled:brightness-75',
        className,
      )}
      onClick={onClick}
    >
      {icon && <span className='flex items-center'>{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
