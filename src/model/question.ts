import { Answer } from "./answer";
import { QuestionJSON } from "./question-json";

export class Question {
  
  id: number;
  text: string;
  answers: Answer[];

  calculateAnswerPoints(points: number): void {
    this.answers[0].points = Answer.MAX_POINTS_VALUE.valueOf() - points;
    this.answers[1].points = points;
  }

  getPointsFor(option: string): Number {
    return this.answers.filter((answer) => {
      return answer.id === option;
    })
    .reduce((acc, answer) => {
      return acc + answer.points;
    }, 0);
  }

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