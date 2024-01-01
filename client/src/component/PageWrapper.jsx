import Wrapper from '../assets/wrappers/PageWrapper';
import BackNav from './BackNav';

const PageWrapper = ({ children, title, isInside, isBg }) => {
  return (
    <Wrapper>
      <div
        className={`page-wrapper ${isInside ? 'inside' : ''} ${
          isBg ? 'bg' : ''
        }`}
      >
        <BackNav title={title} />
      </div>
      <div className="children-head">{children}</div>
    </Wrapper>
  );
};
export default PageWrapper;
