import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { checkDefaultTheme } from '../../App';
import customFetch from '../../utils/customFetch';
import { Navigate, useNavigate } from 'react-router-dom';

export const DashboardContext = createContext({
  products: [],
  setProducts: () => [],
  user: {},
  setUser: () => {},
  // showSidebar: ,
  // setShowSidebar,
  // showCartDropdown,
  // setShowCartDropdown,
  // cartItems,
  // setCartItems,
  // isDarkTheme,
  // setIsDarkTheme,
  // uniqueCartItems,
  // setUniqueCartItems,
});

export const DashboardProvider = ({ children }) => {
  // const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  const [showSidebar, setShowSidebar] = useState(false);
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());
  const [uniqueCartItems, setUniqueCartItems] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // const sellerOnly = cartItems.map((cartItem) => {
    //   return {
    //     sellerId: cartItem.createdBy._id,
    //     sellerFullName: cartItem.createdBy.fullName,
    //   };
    // });
    const sellerNameOnly = cartItems.map(
      (cartItem) => cartItem.createdBy.fullName
    );
    const sellerUnique = sellerNameOnly.filter((v, i, a) => a.indexOf(v) === i);
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

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle('dark-theme', newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const removeItem = (cartItems, productToAdd) => {
    // FIND IF CARTITEMS CONTAINS PRODUCTTOADD
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem._id === productToAdd._id
    );

    // IF FOUHND THEN DELETE ITEM FROM CART
    if (existingCartItem) {
      const newCartItems = cartItems.filter((e) => e._id !== productToAdd._id);
      return [...newCartItems];
    }
  };

  const increaseQuantityItem = (cartItems, productToAdd) => {
    // FIND IF CARTITEMS CONTAINS PRODUCTTOADD
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem._id === productToAdd._id
    );

    // IF FOUND, INCREMENT QUANTITY
    if (existingCartItem) {
      return cartItems.map((cartItem, i) =>
        cartItem._id === productToAdd._id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  };

  const decreaseQuantityItem = (cartItems, productToAdd) => {
    // FIND IF CARTITEMS CONTAINS PRODUCTTOADD
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem._id === productToAdd._id
    );

    // IF PRODUCT.QUANTITY IS 0 THEN DELETE ITEM FROM CART
    if (productToAdd.quantity === 1) {
      const newCartItems = cartItems.filter((e) => e._id !== productToAdd._id);
      return [...newCartItems];
    }

    // IF FOUND, DECREMENT QUANTITY
    if (existingCartItem) {
      console.log(existingCartItem);
      return cartItems.map((cartItem, i) =>
        cartItem._id === productToAdd._id && productToAdd.quantity !== 1
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    }
  };

  const addCartItem = (cartItems, productToAdd) => {
    // FIND IF CARTITEMS CONTAINS PRODUCTTOADD
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem._id === productToAdd._id
    );

    // IF FOUND, INCREMENT QUANTITY
    if (existingCartItem) {
      return cartItems.map((cartItem) =>
        cartItem._id === productToAdd._id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }

    // RETURN NEW ARRAY WITH MODIFIED CARTITEMS/NEW CART ITEM
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };

  const addProductToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const decreaseQuantityFromCart = (productToAdd) => {
    setCartItems(decreaseQuantityItem(cartItems, productToAdd));
  };

  const increaseQuantityFromCart = (productToAdd) => {
    setCartItems(increaseQuantityItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToAdd) => {
    setCartItems(removeItem(cartItems, productToAdd));
  };

  const toggleCartDropdown = () => {
    setShowCartDropdown(!showCartDropdown);
  };

  const logoutUser = async () => {
    Navigate('/');
    await customFetch.get('/authentications/logout');
  };

  const value = {
    user,
    setUser,
    products,
    setProducts,
    featuredProducts,
    setFeaturedProducts,
    showSidebar,
    setShowSidebar,
    showCartDropdown,
    setShowCartDropdown,
    cartItems,
    setCartItems,
    isDarkTheme,
    setIsDarkTheme,
    sellerUniqueArray: uniqueCartItems,
    setUniqueCartItems,
    toggleDarkTheme,
    toggleSidebar,
    addProductToCart,
    decreaseQuantityFromCart,
    increaseQuantityFromCart,
    removeItemFromCart,
    searchKeyword,
    setSearchKeyword,
    toggleCartDropdown,
    logoutUser,
    isLoading,
    setIsLoading,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => {
  return useContext(DashboardContext);
};
