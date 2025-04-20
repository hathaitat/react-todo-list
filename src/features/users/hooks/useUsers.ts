import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '@/api/usersApi';
import { User } from '../types';

export const useUsers = () => {
  return useQuery<User[]>({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });
};