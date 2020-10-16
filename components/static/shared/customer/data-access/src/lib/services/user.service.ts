import { User } from '@workshop-nx/core/entities';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Subject<User[]> = new Subject();
  users$ = this.users.asObservable();

  error: Subject<Error> = new Subject();
  error$ = this.error.asObservable();

  constructor(private http: HttpClient) {}

  load() {
    this.findAll().subscribe(
      users => this.users.next(users),
      error => this.error.next(error)
    )
  }

  findAll() {
    return this.http.get<User[]>('/api/users');
  }

  create(user) {
    return this.http.post('/api/users', user).subscribe(
      () => this.load(),
      error => this.error.next(error)
    )
  }

  update(user: User) {
    return this.http.put(`/api/users/${user._id}`, user).subscribe(
      () => this.load(),
      error => this.error.next(error)
    )
  }

  delete(id: string) {
    return this.http.delete(`/api/users/${id}`).subscribe(
      () => this.load(),
      error => this.error.next(error)
    )
  }
}
