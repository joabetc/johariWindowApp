import { Answer } from "./answer";

export class Question {
  id: number;
  text: string;
  answers: Answer[];

  static fromJSONArray(json: QuestionJSON[]): Question[] {
    return json.map((value, index, arr) => {
      console.log(Question.fromJSON(value).calculateAnswerPoints);
      return Question.fromJSON(value);
    });
  }

  static fromJSON(json: QuestionJSON|string): Question {
    if (typeof json === 'string') {
      return JSON.parse(json, Question.reviver);
    } else {
      let question = Object.create(Question.prototype);
      return Object.assign(question, json, { });
    }
  }

  static reviver(key: string, value: any): any {
    return key === "" ? Question.fromJSON(value) : value;
  }
}