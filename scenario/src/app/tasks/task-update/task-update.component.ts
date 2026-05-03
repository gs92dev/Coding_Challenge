import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../task-types';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-update.component.html',
})
export class TaskUpdateComponent {
  /*
   * Implement your update functionality in this component
   */
  protected taskId: string = '';
  protected task: Task = {
    name: '',
    due: new Date(),
    description: '',
    complete: false,
  };

  constructor(private taskService: TaskService) {}

  protected onSubmit(): void {
    this.taskService.updateTask(this.taskId, this.task);
    this.taskId = '';
    this.task = {
      name: '',
      due: new Date(),
      description: '',
      complete: false,
    };
  }
}
