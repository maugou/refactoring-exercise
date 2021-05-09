// 캡슐화 이후 변수명 변경
let _title = "untitled";

result += `<h1>${tpHd}</h1>`;

setTitle(obj["articleTitle"]);

const title = () => _title;
const setTitle = (arg) => (_title = arg);

// 상수 복제본 생성 후 관련 변수명 변경 
const companyName = "애크미 구스베리";
const cpyNm = companyName;
