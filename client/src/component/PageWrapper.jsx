import Wrapper from '../assets/wrappers/PageWrapper';
import BackNav from './BackNav';

const PageWrapper = ({
  children,
  title,
  isInside,
  isBg,
  isNoHeader,
  isColorWhite,
  isColorBlack,
  isColorWhiteBg,
  isColorBlackBg,
  isColorWhiteStatic,
  isInsideNoTop,
}) => {
  return (
    <Wrapper>
      <div
        className={`page-wrapper ${
          isInside
            ? 'inside'
            : isBg
            ? 'bg'
            : isColorWhite
            ? 'color-white'
            : isColorBlack
            ? 'color-black'
            : isColorWhiteBg
            ? 'color-white-bg'
            : isColorBlackBg
            ? 'color-black-bg'
            : isColorWhiteStatic
            ? 'color-white-static'
            : isInsideNoTop
            ? 'inside-no-top'
            : ''
        } `}
      >
        <BackNav title={title} />
      </div>
      <div className={`children-header ${isNoHeader ? 'no-header' : ''}`}>
        {children}
      </div>
    </Wrapper>
  );
};
export default PageWrapper;
