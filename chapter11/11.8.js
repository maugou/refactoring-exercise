class Employee {
  constructor(name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }

  get name() {
    return this._name;
  }

  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }

  static get legalTypeCodes() {
    return {
      E: "Engineer",
      M: "Manager",
      S: "Salesperson",
    };
  }
}

// 팩터리 함수
function createEmployee(name, typeCode) {
  return new Employee(name, typeCode);
}

// 호출자 내 class 사용 (축약)

const leadEngineer = new Employee(document.leadEngineer, "E");

const candidate = new Employee(document.name, document.empType);
