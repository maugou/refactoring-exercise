const thermostat = {
  // .. 값 존재 (전역객체 표현하기 위해 선언)
};

class HeatingPlan {
  get targetTemperature() {
    return this.xxNEWtargetTemperature(thermostat.selectedTemperature);
  }

  xxNEWtargetTemperature(selectedTemperature) {
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
  if (
    thePlan.xxNEWtargetTemperature(thermostat.selectedTemperature) >
    thermostat.currentTemperature
  ) {
    setToHeat();
  } else if (
    thePlan.xxNEWtargetTemperature(thermostat.selectedTemperature) <
    thermostat.currentTemperature
  ) {
    setToCool();
  } else {
    setOff();
  }
};
