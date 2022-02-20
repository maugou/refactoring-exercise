class Organization {
  constructor(date) {
    this._title = data.title !== undefined ? data.title : date.name;
    this._country = data.country;
  }

  get name() {
    return this._title;
  }
  set name(aString) {
    this._title = aString;
  }

  get country() {
    return this._country;
  }
  set country(aCountryCode) {
    this._country = aCountryCode;
  }
}

const organization = new Organization({
  name: "애크미 구스케리",
  country: "GB",
});
