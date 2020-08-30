import icoPhone from "../assets/img/ico/phone.png";
import icoAddresse from "../assets/img/ico/address.png";


let initialState = {
  contactData: [
    { type: "tel", data: "+7 (495) 555-55-55", icoUrl: icoPhone },
    { type: "address", data: "г. Москва, ул. Расплетина, 24",  icoUrl: icoAddresse },
  ]
};

const menuReducer = (state = initialState, action) => {
  return state;
};

export default menuReducer;
