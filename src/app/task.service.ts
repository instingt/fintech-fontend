import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {ITask} from './models';

@Injectable()
export class TaskService {
  tasks: ITask[];

  constructor(private http: HttpClient) {
  }

  loadTasks() {
    return this.http
      .get<ITask[]>('/api/tasks')
      .pipe(
        tap(tasks => this.tasks = tasks)
      );
  }

  getTaskById(taskId: string): ITask {
    return this.tasks.find(task => task.id === taskId);
  }

  toggleTask(task: ITask) {
    return this.http.post('/api/tasks/toggle', {
      taskId: task.id
    }).pipe(
      tap(() => task.completed = !task.completed)
    );
  }
}
