import { Exercise } from '../models/exercise.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import exerciseList from '../helpers/exercises';

@Injectable({providedIn: 'root'})
export class ExercisesService {
  private exercises: Exercise[] = [];
  private exercisesUpdated = new Subject<Exercise[]>();
  private allExercises: Exercise[] = exerciseList;

  constructor(private http: HttpClient) {}

  getExercises() {
    this.http.get<{message: string, exercises: Exercise[]}>('http://localhost:3000/api/exercises')
      .subscribe((exerciseData) => {
        this.exercises = exerciseData.exercises;
        this.exercisesUpdated.next([...this.exercises]);

      });
  }

  getExerciseUpdtatedListener() {
    return this.exercisesUpdated.asObservable();
  }

  addExercise(name: string) {
    const exercise: Exercise = this.allExercises.filter(ex => ex.name === name)[0];
    exercise._id = null;
    exercise.numDone = 0;
    this.http.post<{message: string}>('http://localhost:3000/api/exercises', exercise)
    .subscribe((responseData) => {
      console.log(responseData.message);
      this.exercises.push(exercise);
      this.exercisesUpdated.next([...this.exercises]);
    });
  }
}
