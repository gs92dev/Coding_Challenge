// No need to change this file
import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskAndId } from '../../task-types';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-display',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './task-display.component.html',
})
export class TaskDisplayComponent {
  protected tasks$: Observable<Array<TaskAndId>>;

  copyID(id: string): void {
    navigator.clipboard.writeText(id).then(
      () => {
        console.log('ID copied to clipboard:', id);
      },
      (err) => {
        console.error('Failed to copy ID to clipboard:', err);
      },
    );
  }

  constructor(private taskService: TaskService) {
    this.tasks$ = this.taskService.getTasks();
  }
}
