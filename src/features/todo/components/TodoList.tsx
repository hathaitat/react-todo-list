import React from 'react';
import { TodoItem } from '@/components/TodoItem';
import { Todo } from '@/features/todo/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TodoListProps {
  todos: Todo[];
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Main List</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {todos.map((todo) => (
            <TodoItem key={todo.name} todo={todo} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
