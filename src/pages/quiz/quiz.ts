import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QUESTIONS } from '../../model/mock-questions';
import { Question } from '../../model/question';
import { ExposureScore } from '../../model/exposure-score';
import { FeedbackScore } from '../../model/feedback-score';

@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {
  questions: Question[] = QUESTIONS;
  exposureScore: ExposureScore = new ExposureScore();
  feedbackScore: FeedbackScore = new FeedbackScore();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.calculateScore();
  }

  calculateScore() {
    this.exposureScore.calculateScore(this.questions);
    this.feedbackScore.calculateScore(this.questions);
    console.log(this.exposureScore.score);
    console.log(this.feedbackScore.score);
  }
}
