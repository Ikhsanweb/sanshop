import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Error } from './routes';

// IMPORTED ACTION
import sellerProceedToShippingAction from './routes/SellerProceedToShipping';
import sellerProceedToDeliveredAction from './routes/SellerProceedToDelivered';
import sellerProceedToReturnedAction from './routes/SellerProceedToReturned';
import proceedToApprovedAction from './routes/ProceedToApproved';
import proceedToNotApprovedAction from './routes/ProceedToNotApproved';
// IMPORTED LOADER

import { DashboardProvider } from './contexts/dashboardContext/dashboardContext';
import { Suspense, lazy } from 'react';
import { Spinner } from './component';

// -------------- LAZY IMPORTS --------------

const HomeLayout = lazy(() => import('./routes/HomeLayout'));
const Landing = lazy(() => import('./routes/Landing'));
const SignUpPage = lazy(() => import('./routes/SignUpPage'));
const SignInPage = lazy(() => import('./routes/SignInPage'));
const SearchLayout = lazy(() => import('./routes/SearchLayout'));
const SearchPage = lazy(() => import('./routes/SearchPage'));
const SearchByDate = lazy(() => import('./routes/SearchByDate'));
const SearchByPrice = lazy(() => import('./routes/SearchByPrice'));
const DashboardLayout = lazy(() => import('./routes/DashboardLayout'));
const Home = lazy(() => import('./routes/Home'));
const Feed = lazy(() => import('./routes/Feed'));
const UserHistories = lazy(() => import('./routes/UserHistories'));
const UserHistoryLayout = lazy(() => import('./routes/UserHistoryLayout'));
const UserHistory = lazy(() => import('./routes/UserHistory'));
const SellerHistoryLayout = lazy(() => import('./routes/SellerHistoryLayout'));
const SellerHistories = lazy(() => import('./routes/SellerHistories'));
const SellerHistory = lazy(() => import('./routes/SellerHistory'));
const ChatsLayout = lazy(() => import('./routes/ChatsLayout'));
const ChatRooms = lazy(() => import('./routes/ChatRooms'));
const ChatRoom = lazy(() => import('./routes/ChatRoom'));
const ChatSettings = lazy(() => import('./routes/ChatSettings'));
const AccountInformationLayout = lazy(() =>
  import('./routes/AccountInformationLayout')
);
const AccountInformation = lazy(() => import('./routes/AccountInformation'));
const UpdateUser = lazy(() => import('./routes/UpdateUser'));
const CheckoutLayout = lazy(() => import('./routes/CheckoutLayout'));
const Checkout = lazy(() => import('./routes/Checkout'));
const Payment = lazy(() => import('./routes/Payment'));
const OrderLayout = lazy(() => import('./routes/OrderLayout'));
const Order = lazy(() => import('./routes/Order'));
const OrderDetail = lazy(() => import('./routes/OrderDetail'));
const OrderItems = lazy(() => import('./routes/OrderItems'));
const OrderItem = lazy(() => import('./routes/OrderItem'));
const PaymentSuccessPage = lazy(() => import('./routes/PaymentSuccessPage'));
const StoreLayout = lazy(() => import('./routes/StoreLayout'));
const Store = lazy(() => import('./routes/Store'));
const SellerAllProducts = lazy(() => import('./routes/SellerAllProducts'));
const SellerProductDetail = lazy(() => import('./routes/SellerProductDetail'));
const SellerAddProduct = lazy(() => import('./routes/SellerAddProduct'));
const SellerUpdateProduct = lazy(() => import('./routes/SellerUpdateProduct'));
const SellerOrdersLayout = lazy(() => import('./routes/SellerOrdersLayout'));
const SellerOrders = lazy(() => import('./routes/SellerOrders'));
const SellerOrder = lazy(() => import('./routes/SellerOrder'));
const Stats = lazy(() => import('./routes/Stats'));
const ProductShowcase = lazy(() => import('./routes/ProductShowcase'));

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
        <Suspense fallback={<Spinner />}>
          <DashboardProvider>
            <HomeLayout />
          </DashboardProvider>
        </Suspense>
      ),
      errorElement: <Error />,
      children: [
        {
          index: true,
          async lazy() {
            let { loader: landingLoader } = await import('./routes/Landing');
            return {
              loader: landingLoader,
            };
          },
          element: (
            <Suspense fallback={<Spinner />}>
              <Landing />
            </Suspense>
          ),
        },
        {
          path: 'sign-up',
          async lazy() {
            let { action: signUpAction } = await import('./routes/SignUpPage');
            return {
              action: signUpAction,
            };
          },
          element: (
            <Suspense fallback={<Spinner />}>
              <SignUpPage />
            </Suspense>
          ),
        },
        {
          path: 'sign-in',
          async lazy() {
            let { action: signInAction } = await import('./routes/SignInPage');
            return {
              action: signInAction,
            };
          },
          element: (
            <Suspense fallback={<Spinner />}>
              <SignInPage />
            </Suspense>
          ),
        },
        {
          path: 'search',
          async lazy() {
            let { loader: searchLayoutLoader } = await import(
              './routes/SearchLayout'
            );
            return {
              loader: searchLayoutLoader,
            };
          },
          element: (
            <Suspense fallback={<Spinner />}>
              <SearchLayout />
            </Suspense>
          ),
          children: [
            {
              index: true,
              async lazy() {
                let { loader: searchPageLoader } = await import(
                  './routes/SearchPage'
                );
                return {
                  loader: searchPageLoader,
                };
              },
              element: (
                <Suspense fallback={<Spinner />}>
                  <SearchPage />
                </Suspense>
              ),
            },
            {
              path: 'orderByDate',
              element: (
                <Suspense fallback={<Spinner />}>
                  <SearchByDate />
                </Suspense>
              ),
            },
            {
              path: 'orderByPrice',
              element: (
                <Suspense fallback={<Spinner />}>
                  <SearchByPrice />
                </Suspense>
              ),
            },
          ],
        },
        {
          path: 'dashboard',
          async lazy() {
            let { loader: dashboardLoader } = await import(
              './routes/DashboardLayout'
            );
            return {
              loader: dashboardLoader,
            };
          },
          element: (
            <Suspense fallback={<Spinner />}>
              <DashboardLayout />
            </Suspense>
          ),
          children: [
            {
              index: true,
              element: (
                <Suspense fallback={<Spinner />}>
                  <Home />
                </Suspense>
              ),
            },
            {
              path: 'feed',
              element: (
                <Suspense fallback={<Spinner />}>
                  <Feed />
                </Suspense>
              ),
            },
            {
              path: 'user-histories',
              element: (
                <Suspense fallback={<Spinner />}>
                  <UserHistoryLayout />
                </Suspense>
              ),
              children: [
                {
                  index: true,
                  async lazy() {
                    let { loader: userHistoriesLoader } = await import(
                      './routes/UserHistories'
                    );
                    return {
                      loader: userHistoriesLoader,
                    };
                  },
                  element: (
                    <Suspense fallback={<Spinner />}>
                      <UserHistories />
                    </Suspense>
                  ),
                },
                {
                  path: 'history-detail/:userHistoryId',
                  async lazy() {
                    let { loader: userHistoryLoader } = await import(
                      './routes/UserHistory'
                    );
                    return {
                      loader: userHistoryLoader,
                    };
                  },
                  element: (
                    <Suspense fallback={<Spinner />}>
                      <UserHistory />
                    </Suspense>
                  ),
                },
              ],
            },
            {
              path: 'seller-histories',
              element: (
                <Suspense fallback={<Spinner />}>
                  <SellerHistoryLayout />
                </Suspense>
              ),
              children: [
                {
                  index: true,
                  async lazy() {
                    let { loader: sellerHistoriesLoader } = await import(
                      './routes/SellerHistories'
                    );
                    return {
                      loader: sellerHistoriesLoader,
                    };
                  },
                  element: (
                    <Suspense fallback={<Spinner />}>
                      <SellerHistories />
                    </Suspense>
                  ),
                },
                {
                  path: 'history-detail/:sellerHistoryId',
                  async lazy() {
                    let { loader: sellerHistoryLoader } = await import(
                      './routes/SellerHistory'
                    );
                    return {
                      loader: sellerHistoryLoader,
                    };
                  },
                  element: (
                    <Suspense fallback={<Spinner />}>
                      <SellerHistory />
                    </Suspense>
                  ),
                },
              ],
            },
            {
              path: 'chat-rooms',
              element: (
                <Suspense fallback={<Spinner />}>
                  <ChatsLayout />
                </Suspense>
              ),
              children: [
                {
                  index: true,
                  element: (
                    <Suspense fallback={<Spinner />}>
                      <ChatRooms />
                    </Suspense>
                  ),
                },
                {
                  path: 'chat-room/:chatRoomId',
                  async lazy() {
                    let { loader: chatRoomLoader } = await import(
                      './routes/ChatRoom'
                    );
                    return {
                      loader: chatRoomLoader,
                    };
                  },
                  element: (
                    <Suspense fallback={<Spinner />}>
                      <ChatRoom />
                    </Suspense>
                  ),
                },
                {
                  path: 'chat-settings',
                  element: (
                    <Suspense fallback={<Spinner />}>
                      <ChatSettings />
                    </Suspense>
                  ),
                },
              ],
            },
            {
              path: 'account-information',
              element: (
                <Suspense fallback={<Spinner />}>
                  <AccountInformationLayout />
                </Suspense>
              ),
              children: [
                {
                  index: true,
                  element: (
                    <Suspense fallback={<Spinner />}>
                      <AccountInformation />
                    </Suspense>
                  ),
                },
                {
                  path: 'update-user',
                  async lazy() {
                    let { loader: updateUserLoader, action: updateUserAction } =
                      await import('./routes/UpdateUser');
                    return {
                      loader: updateUserLoader,
                      action: updateUserAction,
                    };
                  },
                  element: (
                    <Suspense fallback={<Spinner />}>
                      <UpdateUser />
                    </Suspense>
                  ),
                },
              ],
            },
            {
              path: 'checkout',
              element: (
                <Suspense fallback={<Spinner />}>
                  <CheckoutLayout />
                </Suspense>
              ),
              children: [
                {
                  index: true,
                  element: (
                    <Suspense fallback={<Spinner />}>
                      <Checkout />
                    </Suspense>
                  ),
                },
                {
                  path: 'payment',
                  element: (
                    <Suspense fallback={<Spinner />}>
                      <Payment />
                    </Suspense>
                  ),
                },
              ],
            },
            {
              path: 'order',
              element: (
                <Suspense fallback={<Spinner />}>
                  <OrderLayout />
                </Suspense>
              ),
              children: [
                {
                  index: true,
                  async lazy() {
                    let { loader: orderLoader } = await import(
                      './routes/Order'
                    );
                    return {
                      loader: orderLoader,
                    };
                  },
                  element: (
                    <Suspense fallback={<Spinner />}>
                      <Order />
                    </Suspense>
                  ),
                },
                {
                  path: 'order-detail/:orderId',
                  async lazy() {
                    let { loader: orderDetailLoader } = await import(
                      './routes/OrderDetail'
                    );
                    return {
                      loader: orderDetailLoader,
                    };
                  },
                  element: (
                    <Suspense fallback={<Spinner />}>
                      <OrderDetail />
                    </Suspense>
                  ),
                },
                {
                  path: 'order-success/:orderId',
                  async lazy() {
                    let { loader: paymentSuccessPageLoader } = await import(
                      './routes/PaymentSuccessPage'
                    );
                    return {
                      loader: paymentSuccessPageLoader,
                    };
                  },
                  element: (
                    <Suspense fallback={<Spinner />}>
                      <PaymentSuccessPage />
                    </Suspense>
                  ),
                },
                {
                  path: 'order-items/',
                  async lazy() {
                    let { loader: orderItemsLoader } = await import(
                      './routes/OrderItems'
                    );
                    return {
                      loader: orderItemsLoader,
                    };
                  },
                  element: (
                    <Suspense fallback={<Spinner />}>
                      <OrderItems />
                    </Suspense>
                  ),
                },
                {
                  path: 'order-item/:orderItemId',
                  async lazy() {
                    let { loader: orderItemLoader } = await import(
                      './routes/OrderItem'
                    );
                    return {
                      loader: orderItemLoader,
                    };
                  },
                  element: (
                    <Suspense fallback={<Spinner />}>
                      <OrderItem />
                    </Suspense>
                  ),
                },
                {
                  path: 'order-item/proceed-to-approved/:orderItemId',
                  // async lazy() {
                  //   let { action: proceedToApprovedAction } = await import(
                  //     './routes/ProceedToApproved'
                  //   );
                  //   return {
                  //     action: proceedToApprovedAction,
                  //   };
                  // },
                  action: proceedToApprovedAction,
                },
                {
                  path: 'order-item/proceed-to-not-approved/:orderItemId',
                  // async lazy() {
                  //   let { action: proceedToNotApprovedAction } = await import(
                  //     './routes/ProceedToNotApproved'
                  //   );
                  //   return {
                  //     action: proceedToNotApprovedAction,
                  //   };
                  // },
                  action: proceedToNotApprovedAction,
                },
              ],
            },
            {
              path: 'store',
              element: (
                <Suspense fallback={<Spinner />}>
                  <StoreLayout />
                </Suspense>
              ),
              children: [
                {
                  index: true,
                  element: (
                    <Suspense fallback={<Spinner />}>
                      <Store />
                    </Suspense>
                  ),
                },
                {
                  path: 'seller-all-products',
                  async lazy() {
                    let { loader: sellerAllProductsLoader } = await import(
                      './routes/SellerAllProducts'
                    );
                    return {
                      loader: sellerAllProductsLoader,
                    };
                  },
                  element: (
                    <Suspense fallback={<Spinner />}>
                      <SellerAllProducts />
                    </Suspense>
                  ),
                },
                {
                  path: 'seller-product-detail/:productId',
                  async lazy() {
                    let {
                      loader: sellerProductDetailLoader,
                      action: sellerProductDetailAction,
                    } = await import('./routes/SellerProductDetail');
                    return {
                      loader: sellerProductDetailLoader,
                      action: sellerProductDetailAction,
                    };
                  },
                  element: (
                    <Suspense fallback={<Spinner />}>
                      <SellerProductDetail />
                    </Suspense>
                  ),
                },
                {
                  path: 'seller-add-product',
                  async lazy() {
                    let {
                      loader: sellerAddProductLoader,
                      action: sellerAddProductAction,
                    } = await import('./routes/SellerAddProduct');
                    return {
                      loader: sellerAddProductLoader,
                      action: sellerAddProductAction,
                    };
                  },
                  element: (
                    <Suspense fallback={<Spinner />}>
                      <SellerAddProduct />
                    </Suspense>
                  ),
                },
                {
                  path: 'seller-update-product/:productId',
                  async lazy() {
                    let {
                      loader: sellerUpdateProductLoader,
                      action: sellerUpdateProductAction,
                    } = await import('./routes/SellerUpdateProduct');
                    return {
                      loader: sellerUpdateProductLoader,
                      action: sellerUpdateProductAction,
                    };
                  },
                  element: (
                    <Suspense fallback={<Spinner />}>
                      <SellerUpdateProduct />
                    </Suspense>
                  ),
                },
                {
                  path: 'seller-all-orders',
                  element: (
                    <Suspense fallback={<Spinner />}>
                      <SellerOrdersLayout />
                    </Suspense>
                  ),
                  children: [
                    {
                      index: true,
                      async lazy() {
                        let { loader: sellerOrdersLoader } = await import(
                          './routes/SellerOrders'
                        );
                        return {
                          loader: sellerOrdersLoader,
                        };
                      },
                      element: (
                        <Suspense fallback={<Spinner />}>
                          <SellerOrders />
                        </Suspense>
                      ),
                    },
                    {
                      path: 'seller-order/:orderItemId',
                      async lazy() {
                        let { loader: sellerOrderLoader } = await import(
                          './routes/SellerOrder'
                        );
                        return {
                          loader: sellerOrderLoader,
                        };
                      },
                      element: (
                        <Suspense fallback={<Spinner />}>
                          <SellerOrder />
                        </Suspense>
                      ),
                    },
                    {
                      path: 'seller-order/proceed-to-shipping/:orderItemId',
                      // async lazy() {
                      //   let { action: sellerProceedToShippingAction } =
                      //     await import('./routes/SellerProceedToShipping');
                      //   return {
                      //     action: sellerProceedToShippingAction,
                      //   };
                      // },
                      action: sellerProceedToShippingAction,
                    },
                    {
                      path: 'seller-order/proceed-to-delivered/:orderItemId',
                      // async lazy() {
                      //   let { action: sellerProceedToDeliveredAction } =
                      //     await import('./routes/SellerProceedToDelivered');
                      //   return {
                      //     action: sellerProceedToDeliveredAction,
                      //   };
                      // },
                      action: sellerProceedToDeliveredAction,
                    },
                    {
                      path: 'seller-order/proceed-to-returned/:orderItemId',
                      // async lazy() {
                      //   let { action: sellerProceedToReturnedAction } =
                      //     await import('./routes/SellerProceedToReturned');
                      //   return {
                      //     action: sellerProceedToReturnedAction,
                      //   };
                      // },
                      action: sellerProceedToReturnedAction,
                    },
                  ],
                },
              ],
            },
            {
              path: 'stats',
              element: (
                <Suspense fallback={<Spinner />}>
                  <Stats />
                </Suspense>
              ),
            },
            {
              path: 'product-showcase/:productId',
              async lazy() {
                let { loader: productShowcaseLoader } = await import(
                  './routes/ProductShowcase'
                );
                return {
                  loader: productShowcaseLoader,
                };
              },
              element: (
                <Suspense fallback={<Spinner />}>
                  <ProductShowcase />
                </Suspense>
              ),
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
