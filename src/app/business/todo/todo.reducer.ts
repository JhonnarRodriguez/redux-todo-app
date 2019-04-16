import * as fromTodo from "./todo.actions";
import { Todo } from "./model/todo.model";

const todo1 = new Todo("Arreglo1");
const todo2 = new Todo("Arreglo2");
const todo3 = new Todo("Arreglo3");

const todosInitialState: Todo[] = [todo1, todo2, todo3];

export function todoReducer(
  state = todosInitialState,
  action: fromTodo.TodoActions
): Todo[] {
  switch (action.type) {
    case fromTodo.ADD_TODO:
      const newTodo = new Todo(action.text);
      state = [...state, newTodo];

      break;

    case fromTodo.TOOGLE_TODO:
      const toogledTodo = state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            completed: !todoEdit.completed
          };
        } else {
          return todoEdit;
        }
      });

      state = toogledTodo;

      break;

    case fromTodo.TOOGLE_ALL_TODO:
      const toogledAllTodo = state.map((todoEdit: Todo) => {
        return {
          ...todoEdit,
          completed: action.completed
        };
      });

      state = toogledAllTodo;

      break;

    case fromTodo.EDIT_TODO:
      const editedTodo = state.map((editedTodo: Todo) => {
        if (editedTodo.id === action.id) {
          return {
            ...editedTodo,
            text: action.text
          };
        } else {
          return editedTodo;
        }
      });

      state = editedTodo;

      break;

    case fromTodo.DELETE_TODO:
      const stateWithoutTodo = state.filter(
        toDelete => toDelete.id !== action.id
      );

      state = stateWithoutTodo;

      break;

    case fromTodo.CLEAR_ALL_TODO:
      const clearedTodo = state.filter(
        clearedTodo => !clearedTodo.completed
      );

      state = clearedTodo;

      break;

    default:
      break;
  }

  return state;
}
