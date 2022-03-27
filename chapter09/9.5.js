class Order {
  constructor(data) {
    this._number = data.number;
    this._customer = new Customer(data.customer);
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }
}

let _repositoryData;

const initialize = () => {
  _repositoryData = {};
  _repositoryData.customers = new Map();
};

const registerCustomer = (id) => {
  if (!_repositoryData.customers.has(id)) {
    _repositoryData.customers.set(id, new Customer(id));
  }

  return findCustomer(id);
};

const findCustomer = (id) => {
  return _repositoryData.customers.get(id);
};
