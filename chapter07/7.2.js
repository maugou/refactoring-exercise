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

  addCourse(aCourse) {
    this._courses.push(aCourse)
  }

  removeCourse(aCourse, fnIfAbsent = () => {
    throw new RangeError()
  }) {
    const index = this.courses.indexOf(aCourse);

    if (index === -1) { 
      fnIfAbsent()
    } else {
      this._courses.splice(index, 1)
    }
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