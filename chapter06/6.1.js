const printOwing = (invoice) => {
  printBanner();

  // 미해결 채무(outstanding)를 계산한다.
  const outstanding = calulateOustanding(invoice);

  // 마감일(dueDate)을 기록한다.
  recordDueDate(invoice);

  // 세부 사항을 출력한다.
  printDetails(invoice, outstanding);
};

const printBanner = () => {
  console.log("***************");
  console.log("*** 고객 채무 ***");
  console.log("***************");
};

const printDetails = (invoice, outstanding) => {
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`마감일: ${invoice.dueDate.toLocalDateString()}`);
};

const recordDueDate = (invoice) => {
  const today = "2021-04-03";
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
};

const calulateOustanding = (invoice) => {
  let result = 0;
  for (const o of invoice.orders) {
    result += o.amount;
  }

  return result;
};
