import { Action } from "@ngrx/store";

export const ADD_TODO = "[TODO] Add Todo";
export const TOOGLE_TODO = "[TODO] Toogle Todo";
export const TOOGLE_ALL_TODO = "[TODO] Toogle All Todo";
export const EDIT_TODO = "[TODO] Edit Todo";
export const DELETE_TODO = "[TODO] Delete Todo";
export const CLEAR_ALL_TODO = "[TODO] Clear All Todo";

export class AddTodoAction implements Action {
  readonly type = ADD_TODO;

  constructor(public text: string) {}
}

export class ToogleTodoAction implements Action {
  readonly type = TOOGLE_TODO;

  constructor(public id: number) {}
}

export class ToogleAllTodoAction implements Action {
  readonly type = TOOGLE_ALL_TODO;

  constructor(public completed: boolean) {}
}

export class EditTodoAction implements Action {
  readonly type = EDIT_TODO;

  constructor(public id: number, public text: string) {}
}

export class DeleteTodoAction implements Action {
  readonly type = DELETE_TODO;

  constructor(public id: number) {}
}

export class ClearAllTodoAction implements Action {
  readonly type = CLEAR_ALL_TODO;
}

export type TodoActions =
  | AddTodoAction
  | ToogleTodoAction
  | ToogleAllTodoAction
  | EditTodoAction
  | DeleteTodoAction
  | ClearAllTodoAction;
