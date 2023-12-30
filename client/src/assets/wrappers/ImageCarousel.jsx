import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  overflow: hidden;
  width: 100%;
  z-index: 0;
  position: relative;
  .slideshowSlider {
    white-space: nowrap;
    transition: ease 1000ms;
    .slide {
      display: inline-flex;
      height: 200px;
      width: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
      .product-name {
        position: absolute;
        bottom: 3rem;
        right: 1rem;
        background-color: var(--the-primary-color);
        color: white;
        padding: 0.25rem 0.45rem;
      }
    }
  }
  .slideshowDots {
    text-align: center;
    position: absolute;
    bottom: 3rem;
    left: 1rem;
    .slideshowDot {
      display: inline-block;
      height: 10px;
      width: 10px;
      cursor: pointer;
      margin: 15px 7px 0;
      background-color: #c4c4c4;
    }
    .slideshowDot.active {
      background-color: var(--the-primary-color);
    }
  }
  @media (min-width: 1024px) {
    .slideshowSlider {
      .slide {
        height: 400px;
      }
    }
  }
`;
