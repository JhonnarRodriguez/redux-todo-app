import { Todo } from './business/todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import * as fromTodo from './business/todo/todo.reducer';
import * as fromFilter from './filter/filter.reducer';
import * as fromFilterActions from './filter/filter.action';

export interface AppState {
    todos: Todo[];
    filter: fromFilterActions.allowedFilters;
}

export const applicationReducers: ActionReducerMap<AppState> = {
    todos: fromTodo.todoReducer,
    filter: fromFilter.filterReducer
};
