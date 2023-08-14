import PropTypes from "prop-types";
import { useState } from "react";
import "../styles/Item.css";

function Item(props) {
  let cartItemsNumber = 0;
  if (props.cart) {
    let index = props.cartItems.findIndex((e) => e.id === props.item.id);
    cartItemsNumber = props.cartItems[index].qty;
  }

  const [itemsNumber, setItemsNumber] = useState(() => {
    if (props.cart) {
      return cartItemsNumber;
    } else {
      return 0;
    }
  });

  const onDecreaseItems = (e) => {
    e.preventDefault();
    if (itemsNumber === 0) {
      return;
    }
    setItemsNumber(itemsNumber - 1);

    if (props.cart) {
      let newCartItems = [...props.cartItems];
      let index = newCartItems.findIndex((e) => e.id === props.item.id);

      newCartItems[index].qty -= 1;
      props.setCartItems(newCartItems);
    }
  };

  const onIncreaseItems = (e) => {
    e.preventDefault();
    setItemsNumber(itemsNumber + 1);
    if (props.cart) {
      let newCartItems = [...props.cartItems];
      let index = newCartItems.findIndex((e) => e.id === props.item.id);
      newCartItems[index].qty += 1;
      props.setCartItems(newCartItems);
    }
  };

  const onAddToCart = (e) => {
    e.preventDefault();
    if (itemsNumber === 0) {
      return;
    }

    let newCartItems = [...props.cartItems];
    let index = newCartItems.findIndex((e) => e.id === props.item.id);

    if (index > -1) {
      newCartItems[index].qty += itemsNumber;
    } else {
      newCartItems.push({ ...props.item, qty: itemsNumber });
    }

    props.setCartItems(newCartItems);
  };

  const removeFromCart = (e) => {
    e.preventDefault();
    let newCartItems = [...props.cartItems];
    let index = newCartItems.findIndex((e) => e.id === props.item.id);
    newCartItems.splice(index, 1);

    props.setCartItems(newCartItems);
  };

  return (
    <li>
      <img src={props.item.image} alt="" />
      <div className="info">
        <h4>{props.item.title}</h4>
        <div>{props.item.price}$</div>
        <div>
          <form>
            <button onClick={onDecreaseItems}>-</button>
            <input
              type="number"
              value={itemsNumber}
              onChange={(e) => setItemsNumber(e.target.value)}
            />
            <button onClick={onIncreaseItems}>+</button>
            {!props.cart && <button onClick={onAddToCart}>Add to cart</button>}
            {props.cart && <button onClick={removeFromCart}>Remove</button>}
          </form>
        </div>
      </div>
    </li>
  );
}

Item.propTypes = {
  item: PropTypes.object,
  setCartItems: PropTypes.func,
  cartItems: PropTypes.array,
  cart: PropTypes.bool,
};

export default Item;
