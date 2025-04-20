import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Todo } from '@/features/todo/types';
import { TodoItem } from '@/components/TodoItem';

interface TodoColumnProps {
  title: string;
  todos: Todo[];
}

export const TodoColumn: React.FC<TodoColumnProps> = ({ title, todos }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div className="space-y-2">
          {todos.map((todo) => (
            <TodoItem key={todo.name} todo={todo} inColumn />
          ))}
        </motion.div>
      </CardContent>
    </Card>
  );
};
