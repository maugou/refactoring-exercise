let reservations = [];

const addReservation = (customer) => {
  newAddReservation(customer, false);
};

const newAddReservation = (customer, isPriority) => {
  console.assert(isPriority === true || isPriority === false);
  reservations.push(customer);
};

// 6.5-4 기초식
const inNewEngland = (stateCode) => {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
};

// const newInNewEngland = (stateCode) =>  {
//   return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
// }

const newEnglanders = someCustomers.filter((c) => inNewEngland(c.address.state));
