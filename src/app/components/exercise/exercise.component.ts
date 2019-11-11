import { Component, OnInit } from '@angular/core';
import { ExerciseCreateComponent } from '../exercise-create/exercise-create.component';
import { ExerciseListComponent } from '../exercise-list/exercise-list.component';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
