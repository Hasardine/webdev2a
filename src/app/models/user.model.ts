import { Workout } from './workout.model';

export interface User {
  username: string;
  workoutList: Workout[];
  _id: string;
  __v: number;
  salt: string;
  hash: string;
}
