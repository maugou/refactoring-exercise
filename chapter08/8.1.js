const trackSummary = (points) => {
  const totaltime = calculateTime();
  const totalDistance = calculateDistance();
  const pace = totalTime / 60 / totalDistance;

  const calculateDistance = () => {
    let result = 0;
    for (let i = 1; i < points.length; i++) {
      result += distance(points[i - 1], points[i]);
    }

    return result;
  };

  // 아래 함수 상세 계산 및 결과는 생략
  const distance = (p1, p2) => {
    return;
  };
  const radians = (degrees) => {
    return;
  };
  const calculateTime = () => {
    return;
  };

  return {
    time: totaltime,
    distance: totalDistance,
    pace,
  };
};

const top_calculateDistance = (points) => {
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    result += distance(points[i - 1], points[i]);
  }

  return result;
};
