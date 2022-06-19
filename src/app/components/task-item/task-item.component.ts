import { Component, OnInit, Input } from '@angular/core';
import { IconDefinition, faTimes } from '@fortawesome/free-solid-svg-icons';

import { Task } from '../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task = { text: '', day: '', reminder: false };
  faTimes: IconDefinition = faTimes;

  constructor() {}

  ngOnInit(): void {}
}
