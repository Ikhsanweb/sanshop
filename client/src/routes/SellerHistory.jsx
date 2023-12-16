import { useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/SellerHistory';
import customFetch from '../utils/customFetch';
import PageWrapper from '../component/PageWrapper';
import {
  CustomerOrderInfo,
  OrderDetailStatusInfo,
  OrderDetailTotalPrice,
  OrderItemSecondaryTitle,
  OrderItemTitle,
  OrderStatusInfo,
  OrderedProduct,
} from '../component';
import { toast } from 'sonner';

export const loader = async ({ params }) => {
  const { sellerHistoryId } = params;
  try {
    const { data: sellerHistory } = await customFetch.get(
      `/orders/seller/get-history/${sellerHistoryId}`
    );
    const response = sellerHistory.sellerHistory;
    return response;
    // return data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const SellerHistory = () => {
  const sellerHistory = useLoaderData();
  const { deliveryStatus, orderStatus, orderedProducts, totalPrice } =
    sellerHistory;

  return (
    <PageWrapper title="Transaction Detail">
      <Wrapper>
        <div className="order-ordered-products">
          <div className="order-item">
            <OrderStatusInfo deliveryStatus={deliveryStatus} />
          </div>
          <div className="order-bottom">
            <OrderDetailStatusInfo
              deliveryStatus={deliveryStatus}
              orderStatus={orderStatus}
            />
            <OrderItemTitle orderItem={sellerHistory} isSeller />
            <OrderItemSecondaryTitle />
            <div className="order-item-body">
              {orderedProducts.map((orderedProduct) => {
                return (
                  <OrderedProduct
                    key={orderedProduct._id}
                    orderedProduct={orderedProduct}
                  />
                );
              })}
              <CustomerOrderInfo sellerOrderItem={sellerHistory} />
              <div className="order-bottom">
                <OrderDetailTotalPrice totalPrice={totalPrice} />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </PageWrapper>
  );
};
export default SellerHistory;
