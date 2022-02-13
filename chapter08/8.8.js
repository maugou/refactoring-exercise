// 매개변수
const dummy = `office, country, telephone
 Chicago, USA, +1 312 373 1000
 Bangalore, India, +91 80 4064 9570

 ...
`;

const acquireData = (input) => {
  const lines = input.split("\n");

  const result = [];
  const loopItems = lines
    .slice(1)
    .filter((line) => line.trim() !== "")
    .map((line) => line.split(","))
    .filter((record) => recore[1].trim() === "India");

  for (const line of loopItems) {
    const record = line;

    result.push({ city: record[0].trim(), phone: record[2].trim() });
  }

  return result;
};
