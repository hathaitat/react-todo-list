import { describe, it, expect } from 'vitest';
import { transformUsers } from '@/features/users/utils/transformUsers';
import { User } from '@/features/users/types';

const mockUsers: User[] = [
  {
    id: 1,
    firstName: 'Terry',
    lastName: 'Medhurst',
    gender: 'male',
    age: 30,
    department: 'Engineering',
    address: { postalCode: '12345' },
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe',
    gender: 'female',
    age: 25,
    department: 'Engineering',
    address: { postalCode: '67890' },
  },
];

describe('transformUsers', () => {
  it('should transform users data correctly', () => {
    const result = transformUsers(mockUsers);

    expect(result).toEqual({
      Engineering: {
        male: 1,
        female: 1,
        ageRange: '25-30',
        addressUser: {
          TerryMedhurst: '12345',
          JaneDoe: '67890',
        },
      },
    });
  });
});