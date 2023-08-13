import PropTypes from "prop-types";
import { useState } from "react";
import "../styles/Item.css";

function Item(props) {
  const [itemsNumber, setItemsNumber] = useState(0);

  const onDecreaseItems = (e) => {
    e.preventDefault();
    if (itemsNumber === 0) {
      return;
    }
    setItemsNumber(itemsNumber - 1);
  };

  const onIncreaseItems = (e) => {
    e.preventDefault();
    setItemsNumber(itemsNumber + 1);
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
      newCartItems.push({ id: props.item.id, qty: itemsNumber });
    }

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
            <button onClick={onAddToCart}>Add to cart</button>
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
};

export default Item;
