const payAmount = (employee) => {
  let result;
  if (employee.isSeparated) {
    result = { amount: 0, reasonCode: "SEP" };
  } else {
    if (employee.isRetired) {
      result = { amount: 0, reasonCode: "RET" };
    } else {
      // 급여 계산 로직 구간
      // ...
      result = someFinalComputation();
    }
  }

  return result;
};
