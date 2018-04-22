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
  points: number = 0;

  constructor() { }

  calculateAnswerPoints() {
    this.question.answers[0].points = (5 - this.points);
    this.question.answers[1].points = this.points;
  }
}
