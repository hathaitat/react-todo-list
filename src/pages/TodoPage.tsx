import React from 'react';
import { TodoList } from '@/features/todo/components/TodoList';
import { TodoColumns } from '@/features/todo/components/TodoColumns';
import { useTodoStore } from '@/features/todo/store/todoStore';

export const TodoPage: React.FC = () => {
  const todos = useTodoStore((state) => state.todos);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">
        Auto Delete Todo List
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <TodoList todos={todos} />
        </div>
        <div className="md:col-span-2">
          <TodoColumns />
        </div>
      </div>
    </div>
  );
};
