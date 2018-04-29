import { Score } from "./score";
import { EXPOSURE_MEASUREMENT_TEMPLATE } from "./exposure-measurement-template";

export class ExposureScore extends Score {

  constructor() {
    super(EXPOSURE_MEASUREMENT_TEMPLATE);
  }
}