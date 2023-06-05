import { useQuery } from '@tanstack/react-query';
import { UserService } from '@/services/user.service';
import { useAuth } from '@/hooks/useAuth';

export const useProfile = () => {
  const { user } = useAuth();
  const {data} = useQuery(['get profile'], () => UserService.getProfile()
  , {select: ({ data }) => data, retry: false, enabled: !!user});
  return { profile: data };
}