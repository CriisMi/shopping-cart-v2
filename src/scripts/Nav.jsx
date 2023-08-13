import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Nav = (props) => {
  let totalCartItems = props.cartItems
    .map((item) => item.qty)
    .reduce((prev, next) => prev + next, 0);

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <div>{totalCartItems}</div>
      <Link to="/cart">Cart</Link>
    </nav>
  );
};

Nav.propTypes = {
  cartItems: PropTypes.array,
};

export default Nav;
