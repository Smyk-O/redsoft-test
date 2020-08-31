import icoPhone from "../assets/img/ico/phone.png";
import icoAddresse from "../assets/img/ico/address.png";


let initialState = {
  contactData: [
    { type: "tel", data: "+7 (495) 555-55-55", icoUrl: icoPhone, id: 21 },
    { type: "address", data: "г. Москва, ул. Расплетина, 24",  icoUrl: icoAddresse, id: 22 },
  ]
};

const menuReducer = (state = initialState, action) => {
  return state;
};

export default menuReducer;
