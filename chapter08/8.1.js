class Account {
  // 은행 이자 계산
  get backCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0) {
      result += this.overdraftCharge;
    }

    return result;
  }

  // 초과 인출 이자 계산
  get overdraftCharge() {
    if (this.type.isPremium) {
      const baseCharge = 10;
      if (this.daysOverdrawn <= 7) {
        return baseCharge;
      } else {
        return baseCharge + (this.daysOverdrawn - 7) * 0.85;
      }
    } else {
      return this.daysOverdrawn * 1.75;
    }
  }
}

class AccountType {
  // 초과 인출 이자 계산
  overdraftCharge(daysOverdrawn) {
    if (this.isPremium) {
      const baseCharge = 10;

      if (daysOverdrawn <= 7) {
        return baseCharge;
      } else {
        return baseCharge + (daysOverdrawn - 7) * 0.85;
      }
    } else {
      return daysOverdrawn * 1.75;
    }
  }
}

// 아래 코드는 8.1-1
const trackSummary = (points) => {
  const totaltime = calculateTime();
  const pace = totalTime / 60 / totalDistance(points);

  const calculateTime = () => {
    return;
  };

  return {
    time: totaltime,
    distance: totalDistance(points),
    pace,
  };
};

const totalDistance = (points) => {
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    result += distance(points[i - 1], points[i]);
  }

  return result;
};

const distance = (p1, p2) => {
  const EARTH_RADIUS = 3959;
  const dLat = radians(p2.lat) - radians(p1.lat);
  const dLon = radians(p2.lon) - radians(p1.lon);
  const a =
    Math.pow(Math.sin(dLat / 2), 2) +
    Math.cos(radians(p2.lat)) *
      Math.cos(radians(p1.lat)) *
      Math.pow(Math.sin(dLon / 2), 2);
  const c = 2 * Math.atan2(MAth.sqrt(a), Math.sqrt(1 - a));

  return EARTH_RADIUS * c;
};

const radians = (degrees) => {
  return (degrees * Math.PI) / 180;
};
