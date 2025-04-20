import { User, TransformedUserData } from '../types';

export const transformUsers = (users: User[]): TransformedUserData => {
  const maleCount = users.filter((user) => user.gender.toLowerCase() === 'male').length;
  const femaleCount = users.filter((user) => user.gender.toLowerCase() === 'female').length;

  const ages = users.map((user) => user.age).sort((a, b) => a - b);
  const ageRange = ages.length ? `${ages[0]}-${ages[ages.length - 1]}` : '0-0';

  const addressUser = users.reduce<Record<string, string>>((addrAcc, user) => {
    const key = `${user.firstName}${user.lastName}`;
    addrAcc[key] = user.address.postalCode;
    return addrAcc;
  }, {});

  return {
    user: {
      male: maleCount,
      female: femaleCount,
      ageRange,
      addressUser,
    },
  };
};