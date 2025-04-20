import React from 'react';
import { useUsers } from '@/features/users/hooks/useUsers';
import { transformUsers } from '@/features/users/utils/transformUsers';
import { UserDataDisplay } from '@/features/users/components/UserDataDisplay';
import { Card, CardContent } from '@/components/ui/card';

export const UsersPage: React.FC = () => {
  const { data: users, isLoading, error } = useUsers();

  if (isLoading)
    return (
      <Card>
        <CardContent>Loading...</CardContent>
      </Card>
    );
  if (error)
    return (
      <Card>
        <CardContent>Error: {(error as Error).message}</CardContent>
      </Card>
    );
  if (!users)
    return (
      <Card>
        <CardContent>No data available</CardContent>
      </Card>
    );

  const transformedData = transformUsers(users);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">
        User Data Transformation
      </h1>
      <UserDataDisplay data={transformedData} />
    </div>
  );
};
