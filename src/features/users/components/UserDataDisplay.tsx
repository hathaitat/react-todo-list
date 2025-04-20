import React from 'react';
import { TransformedUserData } from '../types';
import { Card, CardContent } from '@/components/ui/card';

interface UserDataDisplayProps {
  data: TransformedUserData;
}

export const UserDataDisplay: React.FC<UserDataDisplayProps> = ({ data }) => {
  const { user: userData } = data;
  const { male, female, ageRange, addressUser } = userData;

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-semibold mb-4">Transformed User Data</h2>
          <div className="mb-4">
            <h3 className="text-lg font-medium">Gender</h3>
            <table className="min-w-full border-collapse border border-gray-200">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Male
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Female
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">{male}</td>
                  <td className="border border-gray-300 px-4 py-2">{female}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-medium">Age Range</h3>
            <table className="min-w-full border-collapse border border-gray-200">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Range
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    {ageRange}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="text-lg font-medium">Address by User</h3>
            <table className="min-w-full border-collapse border border-gray-200">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    User
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Postal Code
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(addressUser).map(([user, postalCode]) => (
                  <tr key={user}>
                    <td className="border border-gray-300 px-4 py-2">{user}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      {postalCode}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
