const alertForMiscreant = (people) => {
  for (const p of people) {
    if (p === "조카") {
      setOffAlarms(); // 알림 함수
      return "조커";
    }

    if (p === "사루만") {
      setOffAlarms();
      return "사루만";
    }
  }

  return "";
};

const findMiscreant = (people) => {
  for (const p of people) {
    if (p === "조카") {
      setOffAlarms();
      return "조커";
    }

    if (p === "사루만") {
      setOffAlarms();
      return "사루만";
    }
  }

  return "";
};
