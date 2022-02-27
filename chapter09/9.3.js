class ProductionPlan {
  constructor(production) {
    this._initialProduction = production;
    this._productionAccumulator = 0;
    this._adjustments = [];
  }

  get production() {
    assert(
      this._productionAccumulator === this.calculatedProductionAccumulator
    );

    return this._initialProduction + this._productionAccumulator;
  }
 
  // 이후 방식은 9.3-1과 동일하나 인라인은 하지 않는 것이 다름
  get calculatedProductionAccumulator() {
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
  }

  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
    this._production += anAdjustment.amount;
  }
}
