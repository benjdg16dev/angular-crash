import { Component, OnInit } from '@angular/core';

import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  /** Note: To use a service we have to add it as a provider inside the constructor.
   * private because we will only use from here.
   * We can use this.taskService.<> any thing we have on TaskService.
   */
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
}
