import Wrapper from '../assets/wrappers/PageWrapper';
import BackNav from './BackNav';

const PageWrapper = ({ children, title, isInside, isBg, isNoHeader }) => {
  return (
    <Wrapper>
      <div
        className={`page-wrapper ${isInside ? 'inside' : ''} ${
          isBg ? 'bg' : ''
        }`}
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
