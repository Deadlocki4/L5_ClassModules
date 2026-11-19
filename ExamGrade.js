import { Grade } from './Grade.js';

export class ExamGrade extends Grade {
  _isRetake;

  constructor(value, subject, isFinal = false, isRetake = false) {
    super(value, subject, isFinal);
    this._isRetake = isRetake;
  }

  get isRetake() {
    return this._isRetake;
  }
  set isRetake(v) {
    this._isRetake = v;
  }

  show() {
    console.log(this.value, this.subject, this.isFinal, this.isRetake);
  }

  static clone(grade) {
    return new ExamGrade(grade.value, grade.subject, grade.isFinal, grade.isRetake);
  }
}
