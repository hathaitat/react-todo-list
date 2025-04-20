export interface User {
  id: number;
  firstName: string;
  lastName: string;
  department: string;
  gender: string;
  age: number;
  address: {
    postalCode: string;
  };
}

export interface TransformedUserData {
  user: {
    male: number;
    female: number;
    ageRange: string;
    addressUser: Record<string, string>;
  };
}
