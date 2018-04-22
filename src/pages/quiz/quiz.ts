import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QUESTIONS } from '../../model/mock-questions';
import { Question } from '../../model/question';

@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {
  questions: Question[] = QUESTIONS;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizPage');
  }

}
