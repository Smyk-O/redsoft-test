import picture_1 from "../assets/img/picture_1.png";
import picture_2 from "../assets/img/picture_2.png";
import picture_3 from "../assets/img/picture_3.png";
import picture_4 from "../assets/img/picture_4.png";


let initialState = {
  groupOfProducts: [
    {
      name: 'Картины эпохи Возрождения',
      id: '1',
      products: [
        {
          productName: '«Рождение Венеры» Сандро Боттичелли',
          numberOfUnits: 1 ,
          price: '1 000 000',
          oldPrice: '2 000 000',
          currency: '$',
          article: 1111,
          imageUrl: picture_1
        },
        {
          productName: '«Тайная вечеря»  Леонардо да Винчи',
          numberOfUnits: 1 ,
          price: '3 000 000',
          oldPrice: null,
          currency: '$',
          article: 2222,
          imageUrl: picture_2

        },
        {
          productName: '«Сотворение Адама» Микеланджело',
          numberOfUnits: 1 ,
          price: '5 000 000',
          oldPrice: '6 000 000',
          currency: '$',
          article: 3333,
          imageUrl: picture_3

        },
        {
          productName: '«Урок анатомии»  Рембрандт',
          numberOfUnits: 0 ,
          price: null,
          oldPrice: null,
          currency: null,
          article: 4444,
          imageUrl: picture_4
        },
      ],
    },
  ],
};

const productReducer = (state = initialState, action) => {
  return state;
};

export default productReducer;
