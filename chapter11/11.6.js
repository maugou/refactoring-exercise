const thermostat = {
  // .. 값 존재 (전역객체 표현하기 위해 선언)
};

class HeatingPlan {
  get targetTemperature() {
    const selectedTemperature = thermostat.selectedTemperature;

    if (selectedTemperature > this._max) {
      return this._max;
    } else if (selectedTemperature < this._min) {
      return this._min;
    } else {
      return selectedTemperature;
    }
  }
}

const thePlan = new HeatingPlan();

// 호출자
const handleHeating = () => {
  if (thePlan.targetTemperature > thermostat.currentTemperature) {
    setToHeat();
  } else if (thePlan.targetTemperature < thermostat.currentTemperature) {
    setToCool();
  } else {
    setOff();
  }
};
