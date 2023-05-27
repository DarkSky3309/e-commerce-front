import { useQuery } from '@tanstack/react-query';
import { UserService } from '@/services/user.service';
import { Simulate } from 'react-dom/test-utils';
import select = Simulate.select;
import { useAuth } from '@/hooks/useAuth';

export const useProfile = () => {
  const { user } = useAuth();
  const {data} = useQuery(['get profile'], () => UserService.getProfile()
  , {select: ({ data }) => data, retry: false, enabled: !!user});
  return { profile: data };
}