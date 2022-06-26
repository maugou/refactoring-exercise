const disabilityAmount = (anEmployee) => {
  if (isNotEligibleForDisability(anEmployee)) {
    return 0;
  }
};

const isNotEligibleForDisability = (anEmployee) => {
  return (
    anEmployee.seniority < 2 ||
    anEmployee.monthsDisabled > 12 ||
    anEmployee.isPartTime
  );
};
