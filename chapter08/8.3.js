const renderPerson = (outStream, person) => {
  const result = [];

  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(zznew(person.photo));

  return result.join("\n");
};

const photoDiv = (p) => {
  return ["<div>", zznew(p), "</div>"].join("\n");
};

const emitPhotoData = (aPhoto) => {
  const result = [];

  result.push(`<p>위치: ${aPhoto.location}</p>`);
  result.push(`<p>날짜: ${aPhoto.date.toDateString()}</p>`);

  return result.join("\n");
};

const zznew = (p) => {
  return [
    `<p>제목: ${p.title}</p>`,
    `<p>위치: ${aPhoto.location}</p>`,
    `<p>날짜: ${aPhoto.date.toDateString()}</p>`,
  ].join("\n");
};
