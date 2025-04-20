import axios from 'axios';
import { User } from '../features/users/types';

export const fetchUsers = async (): Promise<User[]> => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const response = await axios.get(apiUrl);
  return response.data.users;
};