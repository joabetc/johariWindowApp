import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuestionProvider {

  constructor(public http: HttpClient) {
    console.log('Hello QuestionProvider Provider');
  }

}
