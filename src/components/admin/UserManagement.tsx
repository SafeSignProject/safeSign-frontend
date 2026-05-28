import clsx from 'clsx';
import { ChevronDown, Search, TriangleAlert, User } from 'lucide-react';
import { KakaoIcon, GoogleIcon } from '@/assets';
import { Input } from '@/components/common';
import { useEffect, useRef, useState } from 'react';
import UserPagination from './UserPagination';
import { USERS } from '@/mocks/users';
import { UserDetailInfoModal, AnalysisRecordModal, DeleteUserModal } from '../modal';
import { useAdminUsers } from '@/hooks/useAdminDashboard';
import type { MappedAdminUser } from '@/types/admin';

const ITEMS_PER_PAGE = 5;

const UserManagement = () => {
  const [keyword, setKeyword] = useState('');
  const [debouncedKeyword, setDebouncedKeyword] = useState('');
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const [isOpenUserInfoModal, setIsOpenUserInfoModal] = useState(false);
  const [isOpenAnalysisModal, setIsOpenAnalysisModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const [selectedUser, setSelectedUser] = useState<MappedAdminUser | null>(null);

  const [currentPage, setCurrentPage] = useState(1);

  const menuRef = useRef<HTMLDivElement | null>(null);

  const { data: apiUsers, isLoading, isError } = useAdminUsers();

  const getProviderLabel = (providerType: string) => {
    const p = providerType.toUpperCase();
    if (p === 'EMAIL' || p === 'LOCAL') return 'Email';
    if (p === 'KAKAO') return 'Kakao';
    if (p === 'GOOGLE') return 'Google';
    return providerType;
  };

  const formatDate = (dateStr: string) => {
    try {
      if (!dateStr) return '';
      const d = new Date(dateStr);
      if (isNaN(d.getTime())) return dateStr;
      
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    } catch {
      return dateStr;
    }
  };

  const usersSource: MappedAdminUser[] = apiUsers
    ? apiUsers.map((user) => ({
        id: String(user.userId),
        name: user.name,
        email: user.email,
        joinedAt: formatDate(user.createdAt),
        provider: getProviderLabel(user.providerType),
        role: user.role,
        rawId: user.userId,
      }))
    : USERS.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        joinedAt: user.joinedAt,
        provider: user.provider,
        role: 'USER',
        rawId: 0,
      }));

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedKeyword]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedKeyword(keyword);
    }, 500);

    return () => clearTimeout(timer);
  }, [keyword]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenuId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filteredUsers = usersSource.filter(
    (user) =>
      user.name.toLowerCase().includes(debouncedKeyword.toLowerCase()) ||
      user.email.toLowerCase().includes(debouncedKeyword.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

  return (
    <section className='w-full rounded-2xl border border-light-gray bg-white pt-8'>
      <article className='px-8'>
        <div className='inline-block rounded-lg bg-primary px-4 py-2 text-sm font-semibold leading-6 text-white'>
          전체 회원
        </div>

        <div className='mt-6'>
          <Input
            isSearch={true}
            placeholder='이름, 이메일 검색'
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className='rounded-lg'
          />
        </div>
      </article>

      <article className='mt-8 border-t border-light-gray'>
        <table className='w-full border-collapse'>
          <thead className='bg-[#FAFAFA]'>
            <tr className='border-b border-light-gray text-sm font-semibold text-dark'>
              <th className='py-4'>ID</th>
              <th>이름</th>
              <th>이메일</th>
              <th>가입일</th>
              <th>가입유형</th>
              <th>액션</th>
            </tr>
          </thead>

          <tbody>
            {isLoading ? (
              [1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className='border-b border-light-gray animate-pulse text-center'>
                  <td className='px-6 py-9'><div className='h-4 bg-slate-200 rounded w-12 mx-auto' /></td>
                  <td className='px-6 py-9'><div className='h-5 bg-slate-200 rounded w-20 mx-auto font-semibold' /></td>
                  <td className='px-6 py-9'><div className='h-4 bg-slate-200 rounded w-36 mx-auto' /></td>
                  <td className='px-6 py-9'><div className='h-4 bg-slate-200 rounded w-24 mx-auto' /></td>
                  <td className='px-6 py-9'><div className='h-6 bg-slate-200 rounded-md w-16 mx-auto' /></td>
                  <td className='px-6 py-9'><div className='h-8 bg-slate-200 rounded-lg w-20 mx-auto' /></td>
                </tr>
              ))
            ) : isError ? (
              <tr>
                <td colSpan={6} className='py-11 text-center text-[#E74C3C] font-semibold text-sm'>
                  사용자 목록을 불러오는 중 오류가 발생했습니다.
                </td>
              </tr>
            ) : filteredUsers.length > 0 ? (
              paginatedUsers.map((user) => {
                const isOpen = openMenuId === user.id;

                return (
                  <tr
                    key={user.id}
                    className='border-b border-light-gray text-center text-sm last:border-b-0'
                  >
                    <td className='px-6 py-9 font-medium text-dark-gray'>{user.id}</td>
                    <td className='px-6 py-9 text-base font-semibold text-dark'>{user.name}</td>
                    <td className='px-6 py-9 text-dark-gray'>{user.email}</td>
                    <td className='px-6 py-9 text-dark-gray'>{user.joinedAt}</td>
                    <td className='px-6 py-9'>
                      <span
                        className={clsx(
                          'inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium',
                          user.provider === 'Email' && 'bg-[#F3F4F6] text-[#374151]',
                          user.provider === 'Kakao' && 'bg-[#FEE500] text-[#3C1E1E]',
                          user.provider === 'Google' && 'bg-[#F3F4F6] text-[#374151]',
                        )}
                      >
                        {user.provider === 'Kakao' && <KakaoIcon width={12} height={12} />}
                        {user.provider === 'Google' && <GoogleIcon width={12} height={12} />}

                        {user.provider}
                      </span>
                    </td>

                    <td className='relative px-6 py-9'>
                      <div ref={isOpen ? menuRef : null} className='flex justify-center'>
                        <button
                          type='button'
                          className='flex items-center justify-between gap-1 rounded-lg border border-light-gray bg-white px-4 py-1 text-dark-gray transition hover:brightness-95 active:brightness-90'
                          onClick={() => {
                            setOpenMenuId((prev) => (prev === user.id ? null : user.id));
                          }}
                        >
                          관리
                          <ChevronDown
                            size={16}
                            className={clsx(
                              'text-dark-gray transition-transform duration-300 ease-in-out',
                              isOpen ? 'rotate-180' : 'rotate-0',
                            )}
                          />
                        </button>

                        {isOpen && (
                          <div className='absolute right-10 top-18 z-40 w-45 overflow-hidden rounded-lg border border-light-gray bg-white py-2 shadow-lg duration-150'>
                            <button
                              type='button'
                              className='flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm font-medium text-dark transition-colors hover:bg-gray-50'
                              onClick={() => {
                                setSelectedUser(user);
                                setIsOpenUserInfoModal(true);
                                setOpenMenuId(null);
                              }}
                            >
                              <User size={16} />
                              상세정보
                            </button>

                            <button
                              type='button'
                              className='flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm font-medium text-dark transition-colors hover:bg-gray-50'
                              onClick={() => {
                                setSelectedUser(user);
                                setIsOpenAnalysisModal(true);
                                setOpenMenuId(null);
                              }}
                            >
                              <Search size={16} />
                              분석이력
                            </button>

                            <div className='my-1 border-t border-light-gray' />

                            <button
                              type='button'
                              className='flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm font-medium text-[#D92D20] transition-colors hover:bg-red-50'
                              onClick={() => {
                                setSelectedUser(user);
                                setIsOpenDeleteModal(true);
                                setOpenMenuId(null);
                              }}
                            >
                              <TriangleAlert size={16} />
                              회원삭제
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={6} className='py-11 text-center text-dark-gray'>
                  검색 결과가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <div className='flex items-center justify-between border-t border-light-gray px-8 py-5'>
          <p className='font-medium leading-6 text-dark-gray'>
            총 {filteredUsers.length}명 중 {startIndex + 1}-
            {Math.min(endIndex, filteredUsers.length)}
          </p>

          <UserPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </article>

      {selectedUser && (
        <>
          {isOpenUserInfoModal && (
            <UserDetailInfoModal
              user={selectedUser}
              onClose={() => setIsOpenUserInfoModal(false)}
            />
          )}

          {isOpenAnalysisModal && (
            <AnalysisRecordModal
              user={selectedUser}
              onClose={() => setIsOpenAnalysisModal(false)}
            />
          )}

          {isOpenDeleteModal && (
            <DeleteUserModal user={selectedUser} onClose={() => setIsOpenDeleteModal(false)} />
          )}
        </>
      )}
    </section>
  );
};

export default UserManagement;
