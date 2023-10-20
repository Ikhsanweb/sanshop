import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  HomeLayout,
  SignUpPage,
  SignInPage,
  DashboardLayout,
  Landing,
  Error,
  Home,
  Feed,
  AccountInformation,
  Store,
  Stats,
  ProductShowcase,
  Payment,
  OrderLayout,
  Order,
  OrderDetail,
  CheckoutLayout,
  PaymentSuccessPage,
  StoreLayout,
  SellerAllProducts,
  SellerProductDetail,
  SellerAddProduct,
  SellerUpdateProduct,
  SellerOrdersLayout,
  SellerOrders,
  SellerOrder,
  OrderItems,
  OrderItem,
  UserHistories,
  UserHistoryLayout,
  UserHistory,
  SellerHistoryLayout,
  SellerHistories,
  SellerHistory,
  AccountInformationLayout,
  UpdateUser,
  SearchLayout,
  SearchPage,
  SearchByDate,
  SearchByPrice,
} from './routes';

// IMPORTED ACTION
import { action as signUpAction } from './routes/SignUpPage';
import { action as signInAction } from './routes/SignInPage';
import { action as sellerUpdateProductAction } from './routes/SellerUpdateProduct';
import { action as sellerAddProductAction } from './routes/SellerAddProduct';
import { action as sellerProductDetailAction } from './routes/SellerProductDetail';
import sellerProceedToShippingAction from './routes/SellerProceedToShipping';
import sellerProceedToDeliveredAction from './routes/SellerProceedToDelivered';
import proceedToApprovedAction from './routes/ProceedToApproved';
import proceedToNotApprovedAction from './routes/ProceedToNotApproved';
import sellerProceedToReturnedAction from './routes/SellerProceedToReturned';
import { action as updateUserAction } from './routes/UpdateUser';

// IMPORTED LOADER
import { loader as landingLoader } from './routes/Landing';
import { loader as dashboardLoader } from './routes/DashboardLayout';
import { loader as productShowcaseLoader } from './routes/ProductShowcase';
import { loader as orderLoader } from './routes/Order';
import { loader as orderDetailLoader } from './routes/OrderDetail';
import { loader as paymentSuccessPageLoader } from './routes/PaymentSuccessPage';
import { loader as sellerAllProductsLoader } from './routes/SellerAllProducts';
import { loader as sellerProductDetailLoader } from './routes/SellerProductDetail';
import { loader as sellerUpdateProductLoader } from './routes/SellerUpdateProduct';
import { loader as sellerAddProductLoader } from './routes/SellerAddProduct';
import { loader as sellerOrdersLoader } from './routes/SellerOrders';
import { loader as sellerOrderLoader } from './routes/SellerOrder';
import { loader as orderItemsLoader } from './routes/OrderItems';
import { loader as orderItemLoader } from './routes/OrderItem';
import { loader as userHistoriesLoader } from './routes/UserHistories';
import { loader as userHistoryLoader } from './routes/UserHistory';
import { loader as sellerHistoriesLoader } from './routes/SellerHistories';
import { loader as sellerHistoryLoader } from './routes/SellerHistory';
import { loader as updateUserLoader } from './routes/UpdateUser';
import { loader as searchLayoutLoader } from './routes/SearchLayout';
import { loader as searchPageLoader } from './routes/SearchPage';

import Checkout from './routes/Checkout';
import { DashboardProvider } from './contexts/dashboardContext/dashboardContext';
// import { useDashboardContext } from './contexts/dashboardContext/dashboardContext';
// import CheckoutLayout from './routes/CheckoutLayout';
// import PaymentSuccessPage from './routes/PaymentSuccessPage';

// DARK THEME CHECK
export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme;
};

checkDefaultTheme();

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <DashboardProvider>
          <HomeLayout />
        </DashboardProvider>
      ),
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          loader: landingLoader,
        },
        {
          path: 'sign-up',
          element: <SignUpPage />,
          action: signUpAction,
        },
        {
          path: 'sign-in',
          element: <SignInPage />,
          action: signInAction,
        },
        {
          path: 'checkout',
          element: <CheckoutLayout />,
          children: [
            {
              index: true,
              element: <Checkout />,
              // action: checkoutAction,
            },
            {
              path: 'payment',
              element: <Payment />,
            },
          ],
        },
        {
          path: 'order',
          element: <OrderLayout />,
          children: [
            {
              index: true,
              element: <Order />,
              loader: orderLoader,
            },
            {
              path: 'order-detail/:orderId',
              element: <OrderDetail />,
              loader: orderDetailLoader,
            },
            {
              path: 'order-success/:orderId',
              element: <PaymentSuccessPage />,
              loader: paymentSuccessPageLoader,
            },
            {
              path: 'order-items/',
              element: <OrderItems />,
              loader: orderItemsLoader,
            },
            {
              path: 'order-item/:orderItemId',
              element: <OrderItem />,
              loader: orderItemLoader,
            },
            {
              path: 'order-item/proceed-to-approved/:orderItemId',
              action: proceedToApprovedAction,
            },
            {
              path: 'order-item/proceed-to-not-approved/:orderItemId',
              action: proceedToNotApprovedAction,
            },
          ],
        },
        {
          path: 'search',
          element: <SearchLayout />,
          loader: searchLayoutLoader,
          children: [
            {
              index: true,
              element: <SearchPage />,
              loader: searchPageLoader,
              // action: checkoutAction,
            },
            {
              path: 'orderByDate',
              element: <SearchByDate />,
            },
            {
              path: 'orderByPrice',
              element: <SearchByPrice />,
            },
          ],
        },
        {
          path: 'dashboard',
          element: <DashboardLayout />,
          loader: dashboardLoader,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: 'feed',
              element: <Feed />,
            },
            {
              path: 'user-histories',
              element: <UserHistoryLayout />,
              children: [
                {
                  index: true,
                  element: <UserHistories />,
                  loader: userHistoriesLoader,
                },
                {
                  path: 'history-detail/:userHistoryId',
                  element: <UserHistory />,
                  loader: userHistoryLoader,
                },
              ],
            },
            {
              path: 'seller-histories',
              element: <SellerHistoryLayout />,
              children: [
                {
                  index: true,
                  element: <SellerHistories />,
                  loader: sellerHistoriesLoader,
                },
                {
                  path: 'history-detail/:sellerHistoryId',
                  element: <SellerHistory />,
                  loader: sellerHistoryLoader,
                },
              ],
            },
            {
              path: 'account-information',
              element: <AccountInformationLayout />,
              children: [
                {
                  index: true,
                  element: <AccountInformation />,
                },
                {
                  path: 'update-user',
                  element: <UpdateUser />,
                  loader: updateUserLoader,
                  action: updateUserAction,
                },
              ],
            },
            {
              path: 'store',
              element: <StoreLayout />,
              children: [
                {
                  index: true,
                  element: <Store />,
                },
                {
                  path: 'seller-all-products',
                  element: <SellerAllProducts />,
                  loader: sellerAllProductsLoader,
                },
                {
                  path: 'seller-product-detail/:productId',
                  element: <SellerProductDetail />,
                  action: sellerProductDetailAction,
                  loader: sellerProductDetailLoader,
                },
                {
                  path: 'seller-add-product',
                  element: <SellerAddProduct />,
                  action: sellerAddProductAction,
                  loader: sellerAddProductLoader,
                },
                {
                  path: 'seller-update-product/:productId',
                  element: <SellerUpdateProduct />,
                  action: sellerUpdateProductAction,
                  loader: sellerUpdateProductLoader,
                },
                {
                  path: 'seller-all-orders',
                  element: <SellerOrdersLayout />,
                  children: [
                    {
                      index: true,
                      element: <SellerOrders />,
                      loader: sellerOrdersLoader,
                    },
                    {
                      path: 'seller-order/:orderItemId',
                      element: <SellerOrder />,
                      loader: sellerOrderLoader,
                    },
                    {
                      path: 'seller-order/proceed-to-shipping/:orderItemId',
                      action: sellerProceedToShippingAction,
                    },
                    {
                      path: 'seller-order/proceed-to-delivered/:orderItemId',
                      action: sellerProceedToDeliveredAction,
                    },
                    {
                      path: 'seller-order/proceed-to-returned/:orderItemId',
                      action: sellerProceedToReturnedAction,
                    },
                  ],
                },
              ],
            },
            {
              path: 'stats',
              element: <Stats />,
            },
            {
              path: 'product-showcase/:productId',
              element: <ProductShowcase />,
              loader: productShowcaseLoader,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
