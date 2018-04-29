import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../../model/question';
import { Answer } from '../../model/answer';

@Component({
  selector: 'question',
  templateUrl: 'question.html'
})
export class QuestionComponent implements OnInit {

  @Input() question: Question;
  points: number = 0;

  constructor() { }

  ngOnInit() {
    this.calculateAnswerPoints();
  }

  calculateAnswerPoints(): void {
    this.question.calculateAnswerPoints(this.points);
  }
}
