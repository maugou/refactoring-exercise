const disabilityAmount = (anEmployee) => {
  // or
  if (isNotEligibleForDisability(anEmployee)) {
    return 0;
  }

  // and
  if (anEmployee.onVacaion && anEmployee.seniority > 10) {
    return 1;
  }

  return 0.5;
};

const isNotEligibleForDisability = (anEmployee) => {
  return (
    anEmployee.seniority < 2 ||
    anEmployee.monthsDisabled > 12 ||
    anEmployee.isPartTime
  );
};
