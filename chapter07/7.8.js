/**
 * 7.7 위임 숨기기의 반대 행위
 */
class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get department() {
    return this._department;
  }

  set department(arg) {
    this._department = arg;
  }
}

class Department {
  get chargeCode() {
    return this._chargeCode;
  }
  set chargeCode(arg) {
    this._chargeCode = arg;
  }

  get manager() {
    return this._manager;
  }
  set manager(arg) {
    this._namager = arg;
  }
}
