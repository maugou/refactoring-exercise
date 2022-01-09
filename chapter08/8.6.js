const pricingPlan = retrievePricingPlan();
const baseCharge = pricingPlan.baseCharge;
let charge;
const chargePerUnit = pricingPlan.chargePerUnit;

const order = retreiveOrder();
const units = order.units;

let discountableUnits = Math.max(units - pricingPlan.discountThreshold, 0);

let discount;
discount = discountableunits * pricingPlan.discountFactor;
if (order.isRepeat) discount += 20;

charge = baseCharge + units * chargePerUnit;
charge = charge - discount;
chargeOrder(charge);
