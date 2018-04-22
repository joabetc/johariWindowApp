import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QUESTIONS } from '../../model/mock-questions';
import { Question } from '../../model/question';

@Injectable()
export class QuestionProvider {

  constructor(public http: HttpClient) {
    console.log('Hello QuestionProvider Provider');
  }

  getQuestions(): Question[] {
    return QUESTIONS;
  }
}
