const priceOrder = (product, quantity, shippingMethod) => {
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;

  // 가격계산과 배송비계산 사이에 주고 받는 데이터
  const priceData = { basePrice, quantity, discount };
  const price = applyShipping(priceData, shippingMethod);

  return price;
};

const applyShipping = (priceData, shippingMethod) => {
  const shippingPerCase =
    priceData.basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;
  const shippingCost = priceData.quantity * shippingPerCase;

  const price = priceData.basePrice - priceData.discount + shippingCost;

  return price;
};
