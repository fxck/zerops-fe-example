import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input
} from '@angular/core';
import { CounterTodos, countTodos } from '../../core/todos-base/todos.utils';
import { TodoEntity } from '../../core/todos-base/todos.model';

@Component({
  selector: 'z-todos-counter',
  templateUrl: './todos-counter.component.html',
  styleUrls: ['./todos-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosCounterComponent {
  todos = input.required<TodoEntity[]>();
  todoCount = computed<CounterTodos>(() => countTodos(this.todos()));
}
