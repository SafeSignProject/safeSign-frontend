import clsx from 'clsx';

interface UserPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const UserPagination = ({ currentPage, totalPages, onPageChange }: UserPaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className='flex items-center gap-2'>
      <button
        type='button'
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={clsx(
          'h-9.5 rounded-lg border border-light-gray bg-white px-4 text-sm font-medium leading-5 text-dark-gray transition',
          currentPage === 1
            ? 'cursor-not-allowed opacity-40'
            : 'hover:brightness-95 active:brightness-90',
        )}
      >
        이전
      </button>

      {pages.map((page) => (
        <button
          key={page}
          type='button'
          onClick={() => onPageChange(page)}
          className={clsx(
            'flex h-9.5 w-9.5 items-center justify-center rounded-lg text-sm leading-5 transition',
            currentPage === page
              ? 'bg-primary font-semibold text-white'
              : 'border border-light-gray bg-white font-medium text-dark hover:brightness-95 active:brightness-90',
          )}
        >
          {page}
        </button>
      ))}

      <button
        type='button'
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={clsx(
          'h-9.5 rounded-lg border border-light-gray bg-white px-4 text-sm font-medium leading-5 text-dark-gray transition',
          currentPage === totalPages
            ? 'cursor-not-allowed opacity-40'
            : 'hover:brightness-95 active:brightness-90',
        )}
      >
        다음
      </button>
    </div>
  );
};

export default UserPagination;
