let defaultOwner = {
  firstName: "마틴",
  lastName: "파울러",
};

spaceship.owner = getDefaultOwner();

setDefaultOwner({
  firstName: "레베카",
  lastName: "파슨스",
});

const getDefaultOwner = () => {
  return defaultOwner;
};

const setDefaultOwner = (arg) => {
  defaultOwner = arg;
};
