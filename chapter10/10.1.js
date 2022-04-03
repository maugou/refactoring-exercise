if (summer()) {
  charge = summerCharge();
} else {
  cahrge = reguarCharge();
}

const summer = () => {
  return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
};

const summerCharge = () => {
  return quantity * plan.summerRate;
};

const reguarCharge = () => {
  return quantity * plan.reqularRate + plan.reqularServiceCharge;
};
