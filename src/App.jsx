/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Nav from "./scripts/Nav";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <Nav cartItems={cartItems} />
      <Outlet context={[cartItems, setCartItems]} />
    </div>
  );
}

export default App;
