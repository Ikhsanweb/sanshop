import {
  Form,
  Outlet,
  // redirect,
  useLoaderData,
  useNavigate,
} from 'react-router-dom';
import Wrapper from '../assets/wrappers/SearchLayout';
import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
} from 'react-icons/fa';
import { useDashboardContext } from '../contexts/dashboardContext/dashboardContext';
import { useState } from 'react';
import customFetch from '../utils/customFetch';
import CartDropdown from '../component/CartDropdown';
import CartIcon from '../component/CartIcon';
import { toast } from 'sonner';

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  try {
    const { data } = await customFetch.get('/products/searchedProduct', {
      params,
    });
    return { data, searchValues: { ...params } };
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const SearchLayout = () => {
  const { data } = useLoaderData();
  const { searchKeyword, showCartDropdown } = useDashboardContext();
  const [sorter, setSorter] = useState('');
  const [ascender, setAscender] = useState(false);
  const [pricer, setPricer] = useState(false);
  const [daterer, setDaterer] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = () => navigate('/dashboard');
  const debounce = (onChange) => {
    return (e) => {
      let timeout;
      const form = e.currentTarget.form;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(form);
      }, 2000);
      onChange(form);
    };
  };
  const handlerAscender = () => {
    setAscender(!ascender);
    if (ascender === true) {
      return setSorter('ascending');
    }
    if (ascender === false) {
      return setSorter('descending');
    }
  };
  const handlerPricer = () => {
    setPricer(!pricer);
    if (pricer === true) {
      return setSorter('mostExpensive');
    }
    if (pricer === false) {
      return setSorter('cheapest');
    }
  };
  const handlerDaterer = () => {
    setDaterer(!daterer);
    if (daterer === true) {
      return setSorter('newest');
    }
    if (daterer === false) {
      return setSorter('oldest');
    }
  };
  return (
    <Wrapper>
      <div className="search-bar">
        <Form>
          <div className="search-form-row">
            <div className="top">
              <div className="back-arrow" onClick={handleNavigate}>
                <FaArrowLeft />
              </div>
              <input
                type="search"
                name="search"
                id="search"
                className="form-input"
                placeholder="search"
                defaultValue={searchKeyword}
                onChange={debounce((form) => {
                  form;
                })}
              />
              <input type="hidden" id="sorter" name="sorter" value={sorter} />
              <button type="submit" className="search-submit-button">
                <FaArrowRight className="submit-icon" />
              </button>

              <CartIcon />
            </div>

            <div className="search-links">
              <div
                className={
                  sorter === 'newest' || sorter === 'oldest'
                    ? 'button-container active'
                    : 'button-container'
                }
                onClick={() => handlerDaterer()}
              >
                <button type="submit" className="button-item">
                  newest{' '}
                  {sorter === 'newest' ? (
                    <FaArrowUp />
                  ) : sorter === 'oldest' ? (
                    <FaArrowDown />
                  ) : (
                    ''
                  )}
                </button>
              </div>
              <div
                className={
                  sorter === 'ascending' || sorter === 'descending'
                    ? 'button-container active'
                    : 'button-container'
                }
                onClick={() => handlerAscender()}
              >
                <button type="submit" className="button-item">
                  ascending{' '}
                  {sorter === 'ascending' ? (
                    <FaArrowUp />
                  ) : sorter === 'descending' ? (
                    <FaArrowDown />
                  ) : (
                    ''
                  )}
                </button>
              </div>
              <div
                className={
                  sorter === 'mostExpensive' || sorter === 'cheapest'
                    ? 'button-container active'
                    : 'button-container'
                }
                onClick={() => handlerPricer()}
              >
                <button type="submit" className="button-item">
                  price{' '}
                  {sorter === 'mostExpensive' ? (
                    <FaArrowUp />
                  ) : sorter === 'cheapest' ? (
                    <FaArrowDown />
                  ) : (
                    ''
                  )}
                </button>
              </div>
            </div>
          </div>
        </Form>
      </div>

      <div className="search-list">
        <Outlet context={data} />
      </div>
      {showCartDropdown && <CartDropdown />}
    </Wrapper>
  );
};
export default SearchLayout;
