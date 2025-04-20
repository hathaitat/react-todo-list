import React from 'react';
import { Button } from '@/components/ui/button';
import { Todo } from '@/features/todo/types';
import { useTodoStore } from '@/features/todo/store/todoStore';
import { motion } from 'framer-motion';

interface TodoItemProps {
  todo: Todo;
  inColumn?: boolean;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  inColumn = false,
}) => {
  const { addToColumn, removeFromColumn } = useTodoStore();
  const handleClick = () => {
    if (inColumn) {
      removeFromColumn(todo);
    } else {
      addToColumn(todo);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <Button
        variant={inColumn ? 'default' : 'outline'}
        className="w-full justify-start"
        onClick={handleClick}
      >
        {todo.name}
      </Button>
    </motion.div>
  );
};
