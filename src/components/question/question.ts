import { Component, Input } from '@angular/core';
import { Question } from '../../model/question';
import { Answer } from '../../model/answer';

@Component({
  selector: 'question',
  templateUrl: 'question.html'
})
export class QuestionComponent {

  @Input() question: Question;
  points: number = 0;

  constructor() { }

  calculateAnswerPoints() {
    this.question.answers[0].points = (Answer.MAX_POINTS_VALUE - this.points);
    this.question.answers[1].points = this.points;
  }
}
