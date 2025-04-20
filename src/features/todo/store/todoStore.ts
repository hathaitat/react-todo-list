import { create } from 'zustand';
import { Todo } from '../types';

interface TodoState {
  todos: Todo[];
  fruitColumn: Todo[];
  vegetableColumn: Todo[];
  addToColumn: (todo: Todo) => void;
  removeFromColumn: (todo: Todo) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: [
    { type: 'Fruit', name: 'Apple' },
    { type: 'Vegetable', name: 'Broccoli' },
    { type: 'Vegetable', name: 'Mushroom' },
    { type: 'Fruit', name: 'Banana' },
    { type: 'Vegetable', name: 'Tomato' },
    { type: 'Fruit', name: 'Orange' },
    { type: 'Fruit', name: 'Mango' },
    { type: 'Fruit', name: 'Pineapple' },
    { type: 'Vegetable', name: 'Cucumber' },
    { type: 'Fruit', name: 'Watermelon' },
    { type: 'Vegetable', name: 'Carrot' },
  ],
  fruitColumn: [],
  vegetableColumn: [],

  addToColumn: (todo) =>
    set((state) => {
      const newTodos = state.todos.filter((item) => item.name !== todo.name);
      if (todo.type === 'Fruit') {
        return { todos: newTodos, fruitColumn: [...state.fruitColumn, todo] };
      }
      return {
        todos: newTodos,
        vegetableColumn: [...state.vegetableColumn, todo],
      };
    }),

  removeFromColumn: (todo) =>
    set((state) => {
      if (todo.type === 'Fruit') {
        return {
          fruitColumn: state.fruitColumn.filter(
            (item) => item.name !== todo.name
          ),
          todos: [...state.todos, todo],
        };
      }
      return {
        vegetableColumn: state.vegetableColumn.filter(
          (item) => item.name !== todo.name
        ),
        todos: [...state.todos, todo],
      };
    }),
}));
