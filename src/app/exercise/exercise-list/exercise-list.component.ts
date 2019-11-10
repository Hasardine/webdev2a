import { Component,
  OnInit,
  OnDestroy
 } from '@angular/core';

import { Subscription } from 'rxjs';

import { Exercise } from '../exercise.model';
import { ExercisesService } from '../exercises.service';

@Component ({
  selector: 'app-exercise-list',
  templateUrl:  './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})

export class ExerciseListComponent implements OnInit, OnDestroy {
  // exercises = [
  //   {title: 'First Exercise', content: 'This is the first exercise'},
  //   {title: 'Second Exercise', content: 'This is the second exercise'},
  //   {title: 'Third Exercise', content: 'This is the third exercise'},
  // ];
exercises: Exercise[] = [];
private exercisesSub: Subscription;

  constructor(public exercisesService: ExercisesService) {}

  ngOnInit() {
    this.exercisesService.getExercises();
    this.exercisesSub = this.exercisesService.getExerciseUpdtatedListener()
      .subscribe((exercises: Exercise[]) => {
        this.exercises = exercises;
      });
  }

  ngOnDestroy() {
    this.exercisesSub.unsubscribe();
  }



}
