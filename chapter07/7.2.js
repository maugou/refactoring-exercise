class Person {
  constructor(name) {
    this._name = name;
    this._courses = [];
  }

  get name() {
    return this._name;
  }
  get courses() {
    return this._courses;
  }
  get courses(aList) {
    this._courses = aList
  }
}

class Courses {
  constructor(name, isAdvanced) {
    this._name = name;
    this._isAdvanced = isAdvanced;
  }

  get name() {
    return this._name
  }
  get isAdvanced() {
    return this._isAdvanced
  }
}