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
}) => {
  return (
    <Wrapper>
      <div
        className={`page-wrapper ${isInside ? 'inside' : ''} ${
          isBg ? 'bg' : ''
        } ${isColorWhite ? 'color-white' : ''} ${
          isColorBlack ? 'color-black' : ''
        }`}
      >
        <BackNav title={title} isColorWhite />
      </div>
      <div className={`children-header ${isNoHeader ? 'no-header' : ''}`}>
        {children}
      </div>
    </Wrapper>
  );
};
export default PageWrapper;
