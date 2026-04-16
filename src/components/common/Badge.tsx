import { cn } from '@/utils/cn';
import type { ReactNode } from 'react';

interface BadgeProps {
  label: string;
  tag?: boolean;
  className?: string;
  icon?: ReactNode;
}

const Badge = ({ label, tag, className, icon }: BadgeProps) => {
  return (
    <div
      className={cn(
        'inline-block items-center justify-center gap-2 rounded-sm px-2 py-1 text-xs leading-4 whitespace-nowrap',
        className,
      )}
    >
      {icon && <span className='flex items-center'>{icon}</span>}
      {tag && '#'}
      {label}
    </div>
  );
};

export default Badge;
