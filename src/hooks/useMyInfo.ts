import { getMyInfo } from '@/api/auth';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useQuery } from '@tanstack/react-query';

const useMyInfo = () => {
  const { getAccessToken } = useLocalStorage();

  const token = getAccessToken();

  const query = useQuery({
    queryKey: ['myInfo'],
    queryFn: getMyInfo,
    enabled: !!token,
  });

  return {
    token,
    ...query,
  };
};

export default useMyInfo;
