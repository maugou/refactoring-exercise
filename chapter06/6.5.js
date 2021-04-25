// 6.5-1 기본식으로부터 시작
const circum = (radius) => {
  return circumference(radius);
};

const circumference = (radius) => {
  return 2 * Math.PI * radius;
};
// 기존 circum 함수를 circumference 함수를 호출하도록 변경