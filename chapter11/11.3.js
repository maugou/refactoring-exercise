const rushDeliveryDate = (anOrder) => {
  let deliveryTime;

  if (["MA", "CT"].includes(anOrder.deliveryState)) {
    deliveryTime = 1;
  } else if (["NY", "NH"].includes(anOrder.deliveryState)) {
    deliveryTime = 2;
  } else {
    deliveryTime = 3;
  }

  return anOrder.placeOm.plusDays(1 + deliveryTime);
};

const regularDeliveryDate = (anOrder) => {
  let deliveryTime;

  if (["MA", "CT", "NY"].includes(anOrder.deliveryState)) {
    deliveryTime = 2;
  } else if (["ME", "NH"].includes(anOrder.deliveryState)) {
    deliveryTime = 3;
  } else {
    deliveryTime = 4;
  }

  return anOrder.placeOm.plusDays(2 + deliveryTime);
};

// 호출부
aShipment.deliveryDate = rushDeliveryDate(anOrder);
