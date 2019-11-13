import { Exercise } from './exercise.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { post } from 'selenium-webdriver/http';


@Injectable({providedIn: 'root'})
export class ExercisesService {
  private exercises: Exercise[] = [];
  private exercisesUpdated = new Subject<Exercise[]>();

  constructor(private http: HttpClient) {}

  getExercises() {
    this.http.get<{message: string, exercises: Exercise[]}>('http://localhost:3000/api/exercises')
    .pipe(map((exerciseData) => {
      return exerciseData.exercises.map(exercise => {
        return {
          title: exercise.title,
          content: exercise.content,
          id: exercise._id
        };
      });
    }))
      .subscribe((exercises) => {
        this.exercises = exercises;
        this.exercisesUpdated.next([...this.exercises]);

      });
  }

  getExerciseUpdtatedListener() {
    return this.exercisesUpdated.asObservable();
  }

  getExercise(id: string) {
    return {...this.exercises.find(e => e.id === id)};
  }


  addExercise(title: string, content: string) {
    const exercise: Exercise = {id: null, title, content};
    this.http
    .post<{ message: string, exerciseId: string }>('http://localhost:3000/api/exercises', exercise)
    .subscribe(responseData => {
      const id = responseData.exerciseId;
      exercise.id = id;
      this.exercises.push(exercise);
      this.exercisesUpdated.next([...this.exercises]);
    });
  }

  updateExercise(id: string, title: string, content: string) {
    const exercise: Exercise = { id, title, content};
    this.http.put('http://localhost:3000/api/exercises/' + id, exercise )
      .subscribe(response => console.log(response));
  }

  deleteExercise(exerciseId: string) {
    this.http.delete('http://localhost:3000/api/exercises/' + exerciseId)
   .subscribe(() => {
      const updatedExercise = this.exercises.filter(exercise => exercise.id !== exerciseId);
      this.exercises = updatedExercise;
      this.exercisesUpdated.next([...this.exercises]);
   });
  }

}
