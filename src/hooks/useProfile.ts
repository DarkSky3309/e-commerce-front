import { useQuery } from '@tanstack/react-query';

import { useAuth } from '@/hooks/useAuth';

import { UserService } from '@/services/user.service';

export const useProfile = () => {
  const { user } = useAuth();
  const { data } = useQuery(['get profile'], () => UserService.getProfile(), {
    select: ({ data }) => data,
    retry: false,
    enabled: !!user,
  });
  return { profile: data };
};
