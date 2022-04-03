if (summer()) {
  charge = quantity * plan.summerRate;
} else {
  cahrge = quantity * plan.reqularRate + plan.reqularServiceCharge;
}

const summer = () => {
  return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
};
