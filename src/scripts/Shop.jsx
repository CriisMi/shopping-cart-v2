import { useEffect } from "react";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import "../styles/Shop.css";
import Item from "./Item";

function Shop() {
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

  return (
    <div>
      <div className="body">
        <main>
          <ul>
            {items &&
              items
                .slice(14, 20)
                .map((item) => (
                  <Item
                    key={item.id}
                    item={item}
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                  />
                ))}
          </ul>
        </main>
        <footer></footer>
      </div>
    </div>
  );
}

export default Shop;
