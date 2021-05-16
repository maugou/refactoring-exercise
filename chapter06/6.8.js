const station = {
  name: "ZB1",
  readings: [
    { temp: 47, time: "2016-11-10 09:10" },
    { temp: 53, time: "2016-11-10 09:20" },
    { temp: 58, time: "2016-11-10 09:30" },
    { temp: 53, time: "2016-11-10 09:40" },
    { temp: 51, time: "2016-11-10 09:50" },
  ],
};

// 정상 범위를 벗어난 측정값을 찾는 함수
const readingOUsideRange = (station, range) => {
  return station.readings.filter(
    (r) => r.temp < range.min || r.temp > range.max
  );
};

// 호출문
const range = new NumberRange(
  operatingPlan.temperatureFloor,
  operatingPlan.temperatureCeiling
);

readingOUsideRange(station, range);
class NumberRange {
  constructor(min, max) {
    this._data = { min, max };
  }

  get min() {
    return this._data.min;
  }

  get max() {
    return this._data.max;
  }
}
