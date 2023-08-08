// 호출자
if (!aPlan.xxNEWwithinRange(aRoom.daysTempRange)) {
  alerts.push("방 온도가 지정 범위를 벗어났습니다.");
}

class HeatingPlan {
  xxNEWwithinRange(aNumberRange) {
    return (
      aNumberRange.low >= this._temperatureRange.low &&
      aNumberRange.high <= this._temperatureRange.high
    );
  }
}
