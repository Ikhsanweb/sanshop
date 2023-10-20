import { useEffect, useState } from 'react';
import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from '../assets/wrappers/Cart';
import ShoppingSvg from '../assets/images/shopping-bag.svg';
import { useDashboardContext } from '../contexts/dashboardContext/dashboardContext';
import { IoCartOutline } from 'react-icons/io5';
// import { useDashboardContext } from '../routes/DashboardLayout';
const CartIcon = () => {
  const { toggleCartDropdown, sellerUniqueArray } = useDashboardContext();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let totalLength = 0;
    sellerUniqueArray.map((seller) => {
      return (totalLength += seller.products.length);
    });
    setCartCount(totalLength);
  }, [sellerUniqueArray]);

  return (
    <CartIconContainer onClick={toggleCartDropdown}>
      {/* <ShoppingIcon
        className="shopping-icon"
        src={ShoppingSvg}
        alt="shopping-bag-icon"
      /> */}
      <IoCartOutline className="shopping-icon" />
      <ItemCount className="shopping-icon">{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
