import { Answer } from "./answer";

export interface QuestionJSON {
  id: number;
  text: string;
  answers: Answer[];
}