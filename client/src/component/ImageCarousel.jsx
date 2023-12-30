import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { Wrapper } from '../assets/wrappers/ImageCarousel';
import { useDashboardContext } from '../contexts/dashboardContext/dashboardContext';

// const colorss = ['#0088fe', '#00c49f', '#ffbb28'];
// const
const delay = 2500;

const ImageCarousel = () => {
  const { featuredProducts } = useDashboardContext();

  const [index, setIndex] = useState(0);

  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === featuredProducts.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <Wrapper>
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%,0,0)` }}
      >
        {featuredProducts.map((featuredProduct, indexx) => {
          return (
            <div
              className="slide"
              key={indexx}
              style={{ backgroundImage: `url(${featuredProduct.image})` }}
            >
              <span className="product-name">
                {featuredProduct.name.length >= 20
                  ? featuredProduct.name.substring(0, 20) + '...'
                  : featuredProduct.name}
              </span>
            </div>
          );
        })}
      </div>
      <div className="slideshowDots">
        {featuredProducts.map((_, idx) => {
          return (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? ' active' : ''}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          );
        })}
      </div>
    </Wrapper>
  );
};
export default ImageCarousel;
