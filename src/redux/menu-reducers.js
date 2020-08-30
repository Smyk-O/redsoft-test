let initialState = {
  menuItem: [
    { name: "Каталог", url: "/catalog", id:"1" },
    { name: "Доставка", url: "/delivery", id:"2" },
    { name: "Оплата", url: "/payment", id:"3" },
    { name: "Контакты", url: "/contacts", id:"4" },
    { name: "О галерее", url: "/about", id:"5" },
  ]
};

const menuReducer = (state = initialState, action) => {
  return state;
};

export default menuReducer;
