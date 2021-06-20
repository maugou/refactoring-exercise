const customer = {
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
};

const getRawDataOfCustomers = () => {
  return customer;
};

const setRawDataOfCustomears = (arg) => {
  customer = arg;
};

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
