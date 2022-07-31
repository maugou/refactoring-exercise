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
