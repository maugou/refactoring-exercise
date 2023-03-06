class Customer {
  applyDiscount(aNumber) {
    if (!this.discountRate) return aNumber;
    else {
      // assert(this.discountRate >= 0);

      return aNumber - this.discountRate * aNumber;
    }
  }

  // applyDiscount 실패 시 문제가 발생한 위치 추적이 또 필요하기에 set method에 assert 사용 권장
  set discountRate(aNumber) {
    assert(null === aNumber || aNumber >= 0);
    this._discountRate = aNumber;
  }
}
