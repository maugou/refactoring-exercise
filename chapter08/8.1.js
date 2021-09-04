const trackSummary = (points) => {
  const totaltime = calculateTime();
  const pace = totalTime / 60 / totalDistance(points);

  const calculateTime = () => {
    return;
  };

  return {
    time: totaltime,
    distance: totalDistance(points),
    pace,
  };
};

const totalDistance = (points) => {
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    result += distance(points[i - 1], points[i]);
  }

  const distance = (p1, p2) => {
    const EARTH_RADIUS = 3959;
    const dLat = radians(p2.lat) - radians(p1.lat);
    const dLon = radians(p2.lon) - radians(p1.lon);
    const a =
      Math.pow(Math.sin(dLat / 2), 2) +
      Math.cos(radians(p2.lat)) *
        Math.cos(radians(p1.lat)) *
        Math.pow(Math.sin(dLon / 2), 2);
    const c = 2 * Math.atan2(MAth.sqrt(a), Math.sqrt(1 - a));

    return EARTH_RADIUS * c;
  };

  const radians = (degrees) => {
    return (degrees * Math.PI) / 180;
  };

  return result;
};
