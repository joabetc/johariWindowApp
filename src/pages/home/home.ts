import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { QuizPage } from '../quiz/quiz';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('pt_BR');
  }

  goToQuiz() {
    this.navCtrl.push(QuizPage);
  }

}
