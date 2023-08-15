import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import cartImg from "../assets/shopping-bag_3034002.png";
import shopImg from "../assets/menu_7828477.png";
import "../styles/Nav.css";

const Nav = (props) => {
  let totalCartItems = props.cartItems
    .map((item) => item.qty)
    .reduce((prev, next) => prev + next, 0);

  return (
    <nav>
      <div>
        <Link to="/">
          <div className="home">HOME</div>
        </Link>
      </div>
      <ul className="menu">
        <Link to="/shop">
          <img src={shopImg} width="50px" />
        </Link>
        <div className="carti">
          <Link to="/cart">
            <img src={cartImg} width="50px" />
            <div className="totalItems">{totalCartItems}</div>
          </Link>
        </div>
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  cartItems: PropTypes.array,
  setCurrentPage: PropTypes.func,
};

export default Nav;
