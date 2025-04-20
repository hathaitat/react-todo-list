import React from 'react';
import { TodoColumn } from '@/components/TodoColumn';
import { useTodoStore } from '@/features/todo/store/todoStore';
import { useEffect } from 'react';

export const TodoColumns: React.FC = () => {
  const { fruitColumn, vegetableColumn, removeFromColumn } = useTodoStore();

  useEffect(() => {
    const timers = [...fruitColumn, ...vegetableColumn].map((todo) => {
      return setTimeout(() => {
        removeFromColumn(todo);
      }, 5000);
    });

    return () => timers.forEach(clearTimeout);
  }, [fruitColumn, vegetableColumn, removeFromColumn]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <TodoColumn title="Fruit" todos={fruitColumn} />
      <TodoColumn title="Vegetable" todos={vegetableColumn} />
    </div>
  );
};
