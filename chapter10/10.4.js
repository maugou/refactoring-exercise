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

class EuropeanSwallow {}

class AfricanSwallow {}

class NorwegianBlueParrot {}
class Bird {
  constructor(birdObject) {
    Object.assign(this, birdObject);
  }

  get plumage() {
    switch (this.type) {
      case "유럽 제비":
        return "보통이다";
      case "아프리카 제비":
        return this.numberOfCoconuts > 2 ? "지쳤다" : "보통이다";
      case "노르웨이 파랑 앵무":
        return this.voltage > 100 ? "그을렸다" : "예쁘다";
      default:
        return "알 수 없다";
    }
  }

  get airSpeedVelocity() {
    switch (this.type) {
      case "유럽 제비":
        return 35;
      case "아프리카 제비":
        return 40 - 2 * this.numberOfCoconuts;
      case "노르웨이 파랑 앵무":
        return this.isNailed ? 0 : 10 + this.voltage / 10;
      default:
        return null;
    }
  }
}
