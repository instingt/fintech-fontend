import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {IUser} from './models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: IUser[] = [
    {
      id: '1',
      name: 'Vita'
    }
  ];

  constructor(private http: HttpClient) {
  }

  getUserById(id: string): IUser {
    return this.users.find(u => u.id === id);
  }

  loadUsers() {
    return this.http
      .get<IUser[]>('/api/users')
      .pipe(
        tap(users => this.users = users)
      );
  }
}
