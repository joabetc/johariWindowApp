import { Measurement } from "./measurement";
import { MeasurementTemplate } from "./measurement-template";
import { Question } from "./question";

export class Score {
  score: number;
  measurement: Measurement[];

  constructor(template: MeasurementTemplate[]) {
    this.measurement = template.map((value, index, arr) => {
      let measurement = new Measurement();
      measurement.option = value.option;
      measurement.question = value.question;
      return measurement;
    });
  }

  private mapPoints(questions: Question[]): Measurement[] {
    this.measurement.forEach(measurement => {
      measurement.points = questions.filter((question, index) => {
        return question.id === measurement.question && question.answers.filter((elem) => {
          return elem.id === measurement.option
        })[0];
      })
      .reduce((acc, question) => {
        console.log(measurement.option + ": " + question.getPointsFor(measurement.option));
        return acc + question.getPointsFor(measurement.option).valueOf();
      }, 0);
    });
    return this.measurement;
  }

  calculateScore(questions: Question[]) {
    this.score = this.mapPoints(questions).reduce((acc, value) => {
      return acc + value.points;
    }, 0);
  }
}