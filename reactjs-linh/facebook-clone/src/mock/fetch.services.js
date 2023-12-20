import envConfig from "../config/env.config";

const list = [
  {
    id: 1,
    name: "Pham Tuan Linh",
    type: "user",
    notification: "1 new messenger",
    img: "assets/anh1.png",
  },
  {
    id: 2,
    name: "Hoi ca canh",
    type: "group",
    notification: "2 new messenger",
    img: "assets/anh1.png",
  },
  {
    id: 3,
    name: "Hoang Duoc Su",
    type: "user",
    notification: "",
    img: "assets/anh1.png",
  },
  {
    id: 4,
    name: "Âu Dương Phong",
    type: "user",
    notification: "10 new messenger",
    img: "assets/anh1.png",
  },
  {
    id: 5,
    name: "Hội suger Baby",
    type: "group",
    notification: "10 new messenger",
    img: "assets/anh1.png",
  },
];
const user = [];
export function _fetch(url) {
  //Binding from env
  const isLocal = envConfig.env === "local";
  if (isLocal) {
    const mockData = (data) => {
      return new Promise((resolve) => {
        resolve(data);
      });
    };
    switch (url) {
      case "list-suggest":
        return mockData(list);
      case "list-user":
        return mockData(user);
      default:
        return new Promise((reject) => {
          reject("cung cap 1 duong dan url");
        });
    }
  } else {
    //EXP: dc truyen tu env vao
    const prefixApi = envConfig.prefixAPI;
    return fetch(prefixApi);
  }
}

//HARDCODE: fix cung, local hay dev deu hien thi 1 list co dinh la a

//MOCK: gia lap. moi truong that thi chay a, moi truong gia chay b(khi mtrg la local thi run mode cua local, khi la product thi chay mode cua product)
//phu thuoc vao 1 bien, ma do phai la bien moi truong o mtrg runtime environment(mtrg thuc thi code)
//-> ly do auto build CICD

//DUMMY: khi code 1 com, 1 func thi no ko qtam dang run tren mtrg nao , data gi truyen cho no thi no van hd tron tru
//(o local switch mode local, o product thi swt mode product) ko can sua doi nua, goi la DUMMY
