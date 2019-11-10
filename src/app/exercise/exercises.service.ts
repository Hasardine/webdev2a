import { Exercise } from './exercise.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ExercisesService {
  private exercises: Exercise[] = [];
  private exercisesUpdated = new Subject<Exercise[]>();

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

  addExercise(title: string, content: string) {
    const exercise: Exercise = {id: null, title, content};
    this.http.post<{message: string}>('http://localhost:3000/api/exercises', exercise)
    .subscribe((responseData) => {
      console.log(responseData.message);
      this.exercises.push(exercise);
      this.exercisesUpdated.next([...this.exercises]);
    });
  }
}
