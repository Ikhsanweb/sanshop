import { Link, useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/SellerOrders';
import customFetch from '../utils/customFetch';
import PageWrapper from '../component/PageWrapper';
import {
  CustomerOrderInfo,
  OrderBag,
  OrderDetailStatusInfo,
  OrderDetailTotalPrice,
  OrderItemSecondaryTitle,
  OrderItemTitle,
  OrderedProduct,
  Spinner,
} from '../component';
import { toast } from 'sonner';
import { Suspense } from 'react';

export const loader = async () => {
  try {
    const { data: sellerOrderItems } = await customFetch.get(
      `/orders/seller/get-all-order-item`
    );
    const response = sellerOrderItems.sellerOrderItems;
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const SellerOrders = () => {
  const sellerOrderItems = useLoaderData();
  return (
    <Suspense fallback={<Spinner />}>
      <PageWrapper title="Order Items" isNoHeader>
        <Wrapper>
          <div className="body">
            {sellerOrderItems.map((sellerOrderItem) => {
              return (
                <Link
                  to={`/dashboard/store/seller-all-orders/seller-order/${sellerOrderItem._id}`}
                  key={sellerOrderItem._id}
                >
                  <OrderBag orderItems={sellerOrderItem} />
                  {/* <div className="order-item">
                  <OrderItemTitle orderItem={sellerOrderItem} isSeller />
                  <OrderItemSecondaryTitle />
                  <div className="order-item-body">
                    {sellerOrderItem.orderedProducts.map((orderedProduct) => {
                      return (
                        <OrderedProduct
                          key={orderedProduct._id}
                          orderedProduct={orderedProduct}
                        />
                      );
                    })}
                    <CustomerOrderInfo sellerOrderItem={sellerOrderItem} />
                  </div>
                  <div className="order-bottom">
                    <OrderDetailTotalPrice
                      totalPrice={sellerOrderItem.totalPrice}
                    />
                    <OrderDetailStatusInfo
                      deliveryStatus={sellerOrderItem.deliveryStatus}
                      orderStatus={sellerOrderItem.orderStatus}
                    />
                  </div>
                </div> */}
                </Link>
              );
            })}
          </div>
        </Wrapper>
      </PageWrapper>
    </Suspense>
  );
};
export default SellerOrders;
