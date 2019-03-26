import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {IProject} from './models';

@Injectable()
export class ProjectService {
  constructor(private http: HttpClient) {
  }

  projects: IProject[];

  loadProjects() {
    return this.http
      .get<IProject[]>('/api/projects')
      .pipe(
        tap(projects => this.projects = projects)
      );
  }
}
