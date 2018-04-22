import { Component, Input } from '@angular/core';
import { Question } from '../../model/question';

/**
 * Generated class for the QuestionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'question',
  templateUrl: 'question.html'
})
export class QuestionComponent {

  @Input() question: Question;

  constructor() {
    console.log('Hello QuestionComponent Component');
  }

}
