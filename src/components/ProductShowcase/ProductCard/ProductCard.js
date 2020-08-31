import React, { useState, useEffect, useCallback } from 'react';
import './ProductCard.scss';
import checkUrl from '../../../assets/img/ico/check.png';

function ProductCard({
  name,
  number,
  price,
  oldPrice,
  currency,
  article,
  imageUrl,
  cart,
  putProductInCart,
  delProductInCart,
}) {
  const [classes, setClasses] = useState('');
  const [isTheCart, setInTheCart] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (Boolean(number)) {
      setClasses('product_card');
    } else {
      setClasses('product_card sold');
    }
  }, [number]);

  useEffect(() => {
    setIsDisabled(false)
    setInTheCart(
      cart.find((i) => {
        return i === article;
      })
    );
  }, [article, cart]);

  const addToCart = useCallback(() => {
    setIsDisabled(!isDisabled);
    putProductInCart(article);
  }, [isDisabled, putProductInCart, article]);

  const delToCart = useCallback(() => {
    setIsDisabled(!isDisabled);
    delProductInCart(article);
  }, [isDisabled, delProductInCart, article]);

  return (
    <div className={classes}>
      <div className="product_card__img">
        <img src={imageUrl} alt={name} />
      </div>
      <div className={'product_card__info'}>
        <h2>{name}</h2>
        <div className={'product_card__wrapper'}>
          {Boolean(number) && (
            <>
              <div className={'product_card__price'}>
                {oldPrice && (
                  <div className={'product_card__old_price'}>
                    {oldPrice} {currency}
                  </div>
                )}
                <div>
                  {price} {currency}
                </div>
              </div>
              <button
                className={isTheCart
                    ? 'btn in_the_cart'
                    : 'btn'
                }
                disabled={isDisabled}
                onClick={
                  isTheCart ? delToCart : addToCart
                }
              >
                {isTheCart ? (
                  <>
                    <img src={checkUrl} alt="" /> В корзине
                  </>
                ) : (
                  <>Купить</>
                )}
              </button>
            </>
          )}
          {Boolean(!number) && <div>Продана на аукционе</div>}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
