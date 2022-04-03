if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd)) {
  charge = quantity * plan.summerRate;
} else {
  cahrge = quantity * plan.reqularRate + plan.reqularServiceCharge;
}
