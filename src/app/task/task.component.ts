import {Component, HostBinding, HostListener, Input, OnInit} from '@angular/core';
import {ITask, IUser} from '../models';
import {TaskService} from '../task.service';
import {UserService} from '../user.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.less']
})
export class TaskComponent implements OnInit {
  @Input() taskId: string;
  task: ITask;
  user: IUser;

  @HostListener('click')
  handleHostClick() {
    this.taskService.toggleTask(this.task).subscribe();
  }

  @HostBinding('class.list-group-item-success')
  get completed() {
    return this.task.completed;
  }

  constructor(private taskService: TaskService, private userService: UserService) {
  }

  ngOnInit() {
    this.task = this.taskService.getTaskById(this.taskId);
    this.user = this.userService.getUserById(this.task.assignedUser);
  }
}
