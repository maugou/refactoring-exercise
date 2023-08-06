const alertForMiscreant = () => {
  setOffAlarms();
};

const findMiscreant = (people) => {
  for (const p of people) {
    if (p === "조카") {
      return "조커";
    }

    if (p === "사루만") {
      return "사루만";
    }
  }

  return "";
};
