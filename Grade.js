export class Grade {
  _value;
  _subject;
  _isFinal;

  constructor(value, subject, isFinal = false) {
    this._value = value;
    this._subject = subject;
    this._isFinal = isFinal;
  }

  get value() {
    return this._value;
  }
  set value(v) {
    this._value = v;
  }

  get subject() {
    return this._subject;
  }
  set subject(v) {
    this._subject = v;
  }

  get isFinal() {
    return this._isFinal;
  }
  set isFinal(v) {
    this._isFinal = v;
  }

  show() {
    console.log(this.value, this.subject, this.isFinal);
  }

  delete() {
    Object.keys(this).forEach((key) => delete this[key]);
    Object.freeze(this);
  }

  copy() {
    return this;
  }

  #markAsFinal() {
    this._isFinal = true;
  }

  static clone(grade) {
    return new Grade(grade.value, grade.subject, grade.isFinal);
  }
}
