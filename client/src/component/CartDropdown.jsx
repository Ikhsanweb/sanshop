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
  const { cartItems } = useDashboardContext();
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
      <CartItems>
        {uniqueCartItems.map((item) => (
          <CartItem cartItem={item} key={item.sellerId} />
        ))}
      </CartItems>
      <Button>
        <Link to="/dashboard/checkout">GO TO CHECKOUT</Link>
      </Button>
    </CartDropdownContainer>
  );
};
export default CartDropdown;
