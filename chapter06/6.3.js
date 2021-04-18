const price = (order) => {
  return (
    order.quantity * order.itemPrice -
    Math.max(0, order.quatity - 500) * order.itemPrice * 0.05 +
    Math.min(order.quantity * order.itemPrice * 0.1, 100)
  );
};
