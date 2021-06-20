const customerData = new CustomerData({
  1920: {
    name: "마틴 파울러",
    id: "1920",
    usages: {
      2016: {
        1: 50,
        2: 55,
        // 생략
      },
      2015: {
        1: 70,
        2: 63,
        // 생략
      },
    },
    38673: {
      name: "닐 포드",
      id: "38673",
    },
  },
});

const getCustomerData = () => {
  return customerData;
};

const getRawDataOfCustomers = () => {
  return customerData.rawData;
};

const setUsage = (customerID, year, month, amount) => {
  getRawDataOfCustomers()[customerID].usages[year][month] = amount;
};

const setRawDataOfCustomears = (arg) => {
  customerData = new CustomerData(arg);
};

// 읽기
const compareUsage = (customerID, laterYear, month) => {
  const later = getCustomerData().usage(customerID, laterYear, month);
  const earlier = getCustomerData().usage(customerID, laterYear - 1, month);

  return { laterAmount: later, chagne: later - earlier };
};

class CustomerData {
  constructor(data) {
    this._data = data;
  }

  setUsage(customerID, year, month, amount) {
    this._data[customerID].usages[year][month] = amount;
  }

  get rawData() {
    // cloneDeep 은 lodash 제공 함수
    return _.cloneDeep(this._data);
  }

  usage(customerID, year, month) {
    return this._data[customerID].usages[year][month];
  }
}
// 7.1-1
const organization = new Organization({
  name: "애크미 구스베리",
  country: "GB",
});

const getOrganization = () => {
  return organization;
};

class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }

  get name() {
    return this._name;
  }
  set name(aString) {
    this._name = aString;
  }
  get country() {
    return this._country;
  }
  set country(aCountryCode) {
    this._country = aCountryCode;
  }
}
