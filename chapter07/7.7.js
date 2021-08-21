/**
 * 클라이언트 접근 시 부서 클래스는 숨기고 관리자 정보 제공하는 흐름
 */

class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set department(arg) {
    this._department = arg;
  }

  get manager() {
    return this._department.manager;
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
