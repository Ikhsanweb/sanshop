import { ProductsContainer } from '../component';
import { useDashboardContext } from '../contexts/dashboardContext/dashboardContext';
// import { useDashboardContext } from './DashboardLayout';

const Home = () => {
  const { user, featuredProducts, products } = useDashboardContext();
  return (
    <div>
      <ProductsContainer />
    </div>
  );
};
export default Home;
