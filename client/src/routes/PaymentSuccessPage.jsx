import { Link, useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/PaymentSuccessPage';
import Button from '../component/Button';
import { IoCheckmarkCircle } from 'react-icons/io5';

export const loader = async ({ params }) => {
  return params;
};

const PaymentSuccessPage = () => {
  const { orderId } = useLoaderData();
  return (
    <Wrapper>
      <div className="body">
        <div className="title">
          <h3>Payment</h3>
          <h1>Success</h1>
          <IoCheckmarkCircle className="icon" />
        </div>
        <Button type="button">
          <Link to={`/dashboard`} replace>
            Back to Home
          </Link>
        </Button>
      </div>
    </Wrapper>
  );
};
export default PaymentSuccessPage;
