import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<User[]>('TODOURL/users');
  }

  // TODO get all exercises of a given workout
  // TODO add and remove exercises
  // TODO add and remove workouts
  // TODO add numDone + 1 of a given exercise (logging)
}
