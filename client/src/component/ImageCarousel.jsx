import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { Wrapper } from '../assets/wrappers/ImageCarousel';

const colorss = ['#0088fe', '#00c49f', '#ffbb28'];
const delay = 2500;

const ImageCarousel = () => {
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
          prevIndex === colorss.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    console.log('fired');
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
        {colorss.map((backgroundColor, indexx) => {
          return (
            <div
              className="slide"
              key={indexx}
              style={{ backgroundColor }}
            ></div>
          );
        })}
      </div>
      <div className="slideshowDots">
        {colorss.map((_, idx) => {
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
