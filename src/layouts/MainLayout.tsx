import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '@/components/ui/navigation';

export const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen h-full">
      <Navigation />
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
};
