class Site {
  get customer() {
    return this._customer;
  }
}

class Customer {
  get name() {
    // ...
  }

  get billingPlan() {
    // ...
  }

  set billingPlan(arg) {
    // ...
  }

  get paymentHistory() {
    // ...
  }

  get isUnknown() {
    return false;
  }
}

class UnknownCustomer {
  get isUnknown() {
    return true;
  }
}

// 미확인 고객 확인하는 모든 곳에서는 아래 함수 호출(함수 추출 사용)
const isUnknown = (arg) => {
  if (!(arg instanceof Customer || arg instanceof UnknownCustomer))
    throw new Error(`잘못된 값과 비교: <${arg}>`);
  return arg.isUnknown;
};
