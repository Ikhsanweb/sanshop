/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react';
import { Outlet, redirect, useLoaderData, useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import customFetch from '../utils/customFetch';
import { BigSidebar, Navbar, SmallSidebar } from '../component';
import { checkDefaultTheme } from '../App';
import BottomNavbar from '../component/BottomNavbar';
import { useDashboardContext } from '../contexts/dashboardContext/dashboardContext';

const DashboardContext = createContext();

export const loader = async ({ request }) => {
  try {
    const {
      data: { user: takedUser },
    } = await customFetch.get('/users/get-current-user');
    const {
      data: { products, featuredProducts },
    } = await customFetch.get('/products');
    const response = { takedUser, products, featuredProducts };
    return { response };
  } catch (error) {
    return redirect('/');
  }
};

// export const action = async ({ request }) => {
//   const formData = await request.formData();
//   const data = await Object.fromEntries(formData);

//   console.log(data);

//   return null;
// };

const DashboardLayout = () => {
  const {
    response: {
      takedUser,
      featuredProducts: takedFeaturedProducts,
      products: takedProducts,
    },
  } = useLoaderData();

  const {
    user,
    setUser,
    products,
    setProducts,
    featuredProducts,
    setFeaturedProducts,
  } = useDashboardContext();

  // setUser(takedUser);

  useEffect(() => {
    setUser(takedUser);
    setProducts(takedProducts);
    setFeaturedProducts(takedFeaturedProducts);
  }, [
    setUser,
    takedUser,
    setProducts,
    takedProducts,
    setFeaturedProducts,
    takedFeaturedProducts,
  ]);

  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
          <BottomNavbar />
        </div>
      </main>
    </Wrapper>
  );
};
export default DashboardLayout;
