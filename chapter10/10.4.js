const rating = (voyage, history) => {
  return new Rating(voyage, history);
};

class Rating {
  constructor(voyage, history) {
    this.voyage = voyage;
    this.history = history;
  }

  get value() {
    const vpf = voyageProfitFactor(voyage, history);
    const vr = vayageRisk(voyage);
    const chr = captainHistoryRisk(voyage, history);

    if (vpf * 3 > vr + chr * 2) {
      return "A";
    } else {
      return "B";
    }
  }

  get voyageRisk() {
    let result = 1;
    if (voyage.length > 4) {
      result += 2;
    }

    if (voyage.length > 8) {
      result += voyage.length - 8;
    }

    if (["중국", "동인도"].includes(voyage.zone)) {
      result += 4;
    }

    return Math.max(result, 0);
  }

  get captainHistoryRisk() {
    let result = 1;

    if (history.length < 5) {
      result += 4;
    }

    result += history.filter((v) => v.profit < 0).length;

    if (voyage.zone === "중국" && hasChina(history)) {
      result -= 2;
    }

    return Math.max(result, 0);
  }

  get voyageProfitFactor() {
    let result = 2;
    if (voyage.zone === "중국") {
      result += 1;
    }

    if (voyage.zone === "동인도") {
      result += 1;
    }

    if (voyage.zone === "중국" && hasChina(history)) {
      result += 3;

      if (history.length > 10) {
        result += 1;
      }

      if (voyage.length > 12) {
        result += 1;
      }

      if (voyage.length > 18) {
        result -= 1;
      }
    } else {
      if (history.length > 8) {
        result += 1;
      }

      if (voyage.length > 14) {
        result -= 1;
      }
    }

    return result;
  }

  get hasChina() {
    return history.some((v) => "중국" === v.zone);
  }
}

class ExperiencedChinaRating extends Rating {}

const createRating = (voyage, history) => {
  if (voyage.zone === "중국" && history.some((v) => "중국" === v.zone)) {
    return new ExperiencedChinaRating(voyage, history);
  } else {
    return new Rating(voyage, history);
  }
};

/* 호출 코드 */
const voyage = { zone: "서인도", length: 10 };
const history = [
  { zone: "동인도", profit: 5 },
  { zone: "서인도", profit: 15 },
  { zone: "중국", profit: -2 },
  { zone: "서아프리카", profit: 7 },
];

const myRating = rating(voyage, history);

/** -----------------
 * 아래 예제는 10.4-1
 *  -----------------
 */

const plumages = (birds) => {
  return new Map(birds.map((b) => [b.name, plumage(b)]));
};

const speeds = (birds) => {
  return new Map(birds.map((b) => [b.name, airSpeedVelocity(b)]));
};

const plumage = (bird) => {
  return createBird(bird).plumage;
};

const airSpeedVelocity = (bird) => {
  return createBird(bird).airSpeedVelocity;
};

const createBird = (bird) => {
  switch (bird.type) {
    case "유럽 제비":
      return new EuropeanSwallow(bird);
    case "아프리카 제비":
      return new AfricanSwallow(bird);
    case "노르웨이 파랑 앵무":
      return new NorwegianBlueParrot(bird);
    default:
      return new Bird(bird);
  }
};

class EuropeanSwallow {
  get plumage() {
    return "보통이다";
  }
  get airSpeedVelocity() {
    return 35;
  }
}

class AfricanSwallow {
  get plumage() {
    return this.numberOfCoconuts > 2 ? "지쳤다" : "보통이다";
  }

  get airSpeedVelocity() {
    return 40 - 2 * this.numberOfCoconuts;
  }
}

class NorwegianBlueParrot {
  get plumage() {
    return this.voltage > 100 ? "그을렸다" : "예쁘다";
  }
  get airSpeedVelocity() {
    return this.isNailed ? 0 : 10 + this.voltage / 10;
  }
}
class Bird {
  constructor(birdObject) {
    Object.assign(this, birdObject);
  }

  get plumage() {
    return "알 수 없다";
  }

  get airSpeedVelocity() {
    return null;
  }
}
