import {Component, OnInit} from '@angular/core';
import {forkJoin} from 'rxjs';
import {delay} from 'rxjs/operators';
import {IProject} from './models';
import {ProjectService} from './project.service';
import {TaskService} from './task.service';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  projects: IProject[];
  isDataLoaded = false;
  title = 'Fintech Frontend';
  menu = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'Google',
      href: 'https://google.cn'
    }
  ];

  constructor(
    private projectService: ProjectService,
    private userService: UserService,
    private taskService: TaskService
  ) {
  }

  ngOnInit() {
    forkJoin(
      this.projectService.loadProjects(),
      this.taskService.loadTasks(),
      this.userService.loadUsers()
    ).pipe(delay(1000)).subscribe(([projects]) => {
      this.projects = projects;
      this.isDataLoaded = true;
    });
  }

  handleClick(event: MouseEvent, index: number) {
    if (index === 0) {
      event.preventDefault();
      this.menu.push({
        title: `item ${this.menu.length}`,
        href: '#'
      });
      return;
    }

    if (index > 1) {
      this.menu.splice(index, 1);
    }
  }
}
