/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Nav from "./scripts/Nav";
import "./styles/App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [currentPage, setCurrentPage] = useState("/");
  const path = useLocation().pathname;
  let location = path.split("/")[1];
  if (location === "") {
    location = "homep";
  }

  return (
    <div className={location}>
      <Nav
        cartItems={cartItems}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Outlet context={[cartItems, setCartItems]} />
    </div>
  );
}

export default App;
