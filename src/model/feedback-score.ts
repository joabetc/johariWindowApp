import { Score } from "./score";
import { FEEDBACK_MEASUREMENT_TEMPLATE } from "./feedback-measurement-template";

export class FeedbackScore extends Score {
  
  constructor() {
    super(FEEDBACK_MEASUREMENT_TEMPLATE);
  }
}