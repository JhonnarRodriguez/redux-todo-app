import { Pipe, PipeTransform } from "@angular/core";
import { Todo } from "../business/todo/model/todo.model";
import * as fromFilter from "../filter/filter.action";

@Pipe({
  name: "filterTodoPipe"
})
export class FilterPipe implements PipeTransform {
  transform(todos: Todo[], filterToApply: fromFilter.allowedFilters): Todo[] {
    switch (filterToApply) {
      case "completed":
        return todos.filter(filter => filter.completed === true);
        break;

      case "pending":
        return todos.filter(filter => !filter.completed === true);
        break;

      default:
        return todos;
        break;
    }
  }
}
