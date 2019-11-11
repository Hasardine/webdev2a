import { Exercise } from './exercise.model';

export interface Workout {
  _id: string;
  exerciseList: Exercise[];
  name: string;
}
