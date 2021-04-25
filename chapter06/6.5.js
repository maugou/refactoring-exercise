let reservations = [];

const addReservation = (customer) => {
  newAddReservation(customer, false);
};

const newAddReservation = (customer, isPriority) => {
  console.assert(isPriority === true || isPriority === false);
  reservations.push(customer);
};