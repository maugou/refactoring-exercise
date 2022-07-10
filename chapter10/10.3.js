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
