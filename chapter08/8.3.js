const renderPerson = (outStream, person) => {
  const result = [];

  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(emitPhotoData(person.photo));

  return result.join("\n");
};

const photoDiv = (p) => {
  return ["<div>", emitPhotoData(p), "</div>"].join("\n");
};

const emitPhotoData = (p) => {
  return [
    `<p>제목: ${p.title}</p>`,
    `<p>위치: ${aPhoto.location}</p>`,
    `<p>날짜: ${aPhoto.date.toDateString()}</p>`,
  ].join("\n");
};
