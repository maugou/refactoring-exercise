class Account {
  constructor(number, type, interestRate) {
    this._number = number;
    this._type = type;
    this._interestRate = interestRate;
  }

  get interestRate() {
    return this._interestRate;
  }
}

class AccountType {
  constructor(nameString) {
    this._name = nameString;
  }
}

// 8.2-1
class Customer {
  constructor(name, discountRate) {
    this._name = name;
    this._contract = new CustomerContract(dateToday());
    this._setDiscountRate(discountRate);
  }

  get discountRate() {
    return this._contract._discountRate;
  }

  _setDiscountRate(aNumber) {
    this._contract._discountRate = aNumber;
  }

  becomePreferred() {
    _setDiscountRate(this._discountRate + 0.03);
  }

  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this._discountRate));
  }
}

class CustomerContract {
  constructor(startDate) {
    this._startDate = startDate;
    this._discountRate = dicountRate;
  }

  get discountRate() {
    return this._discountRate;
  }

  set discountRate(arg) {
    this._discountRate = arg;
  }
}
