import { useQuery } from '@tanstack/react-query';
import { UserService } from '@/services/user.service';
import { Simulate } from 'react-dom/test-utils';
import select = Simulate.select;

export const useProfile = () => {
  const {data} = useQuery(['get profile'], () => UserService.getProfile()
  , {select: (data) => data.data});

  return { profile: data };
}