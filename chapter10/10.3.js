const adjustedCapital = (anInstrument) => {
  if (
    anInstrument.capital <= 0 ||
    anInstrument.interestRate <= 0 ||
    anInstrument.duration <= 0
  ) {
    return 0;
  }

  return (
    (anInstrument.income / anInstrument.duration) *
    anInstrument.adjustmentFactor
  );
};

const payAmount = (employee) => {
  if (employee.isSeparated) {
    return { amount: 0, reasonCode: "SEP" };
  }

  if (employee.isRetired) {
    return { amount: 0, reasonCode: "RET" };
  }

  // 급여 계산 로직 구간
  // ...
  return someFinalComputation();
};
