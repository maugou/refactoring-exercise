const organization = new Organization({
  name: "애크미 구스베리",
  country: "GB",
});

const getRawDataOfOrganization = () => {
  return organization._data;
};

const getOrganization = () => {
  return organization;
};

class Organization {
  constructor(data) {
    this._data = data;
  }
}
