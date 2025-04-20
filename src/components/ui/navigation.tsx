import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const Navigation: React.FC = () => {
  return (
    <nav className="bg-pink-600 text-white py-4">
      <div className="container mx-auto px-4 flex space-x-4">
        <NavLink to="/">
          {({ isActive }) => (
            <Button variant={isActive ? 'default' : 'ghost'}>Todo List</Button>
          )}
        </NavLink>
        <NavLink to="/users">
          {({ isActive }) => (
            <Button variant={isActive ? 'default' : 'ghost'}>User Data</Button>
          )}
        </NavLink>
      </div>
    </nav>
  );
};
