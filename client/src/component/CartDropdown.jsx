import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CartDropdownContainer,
  CartItems,
} from '../assets/wrappers/CartDropdown';
// import { useDashboardContext } from '../routes/DashboardLayout';
import Button from './Button';
import CartItem from './CartItem';
import { useDashboardContext } from '../contexts/dashboardContext/dashboardContext';

const CartDropdown = () => {
  const { cartItems, toggleCartDropdown } = useDashboardContext();
  const [uniqueCartItems, setUniqueCartItems] = useState([]);

  useEffect(() => {
    const sellerOnly = cartItems.map((cartItem) => cartItem.createdBy.fullName);
    const sellerUnique = sellerOnly.filter((v, i, a) => a.indexOf(v) === i);
    const sellerUniqueArray = sellerUnique.map((sellerFullName, i) => {
      return {
        sellerId: sellerFullName + i,
        sellerName: sellerFullName,
        products: [],
      };
    });

    cartItems.map((cartItem) => {
      sellerUnique.map((sellerFullName, i) => {
        if (sellerFullName === cartItem.createdBy.fullName) {
          if (sellerUniqueArray[i].sellerName === cartItem.createdBy.fullName) {
            return sellerUniqueArray[i].products.push(cartItem);
          }
        }
      });
    });

    setUniqueCartItems(sellerUniqueArray);
  }, [cartItems]);
  return (
    <CartDropdownContainer>
      {cartItems.length === 0 ? <span>Cart is Empty</span> : null}
      <CartItems>
        {uniqueCartItems.map((item) => (
          <CartItem cartItem={item} key={item.sellerId} />
        ))}
      </CartItems>
      {cartItems.length === 0 ? (
        ''
      ) : (
        <Button disabled={cartItems.length === 0} onClick={toggleCartDropdown}>
          <Link to="/checkout">GO TO CHECKOUT</Link>
        </Button>
      )}
    </CartDropdownContainer>
  );
};
export default CartDropdown;
