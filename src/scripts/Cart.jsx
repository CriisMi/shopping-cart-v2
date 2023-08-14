import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Item from "./Item";

const Cart = () => {
  const [cartItems, setCartItems] = useOutletContext();
  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products`, {
          mode: "cors",
        });
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualItems = await response.json();
        setItems(actualItems);
        setError(null);
      } catch (error) {
        setError(error.message);
        setItems(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  let fullCartItems = [];
  for (let i = 0; i < cartItems.length; i++) {
    fullCartItems.push(items[parseInt(cartItems[i].id) - 1]);
  }

  let totalCost = cartItems
    .map((item) => item.qty * item.price)
    .reduce((prev, next) => prev + next, 0)
    .toFixed(2);

  return (
    <div>
      <ul>
        {items &&
          fullCartItems.map((item) => (
            <Item
              key={item.id}
              item={item}
              cartItems={cartItems}
              setCartItems={setCartItems}
              cart={true}
            />
          ))}
      </ul>
      <div>Total: {totalCost}$</div>
      <div>CheckOut</div>
    </div>
  );
};

export default Cart;
