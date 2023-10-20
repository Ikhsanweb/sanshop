import Wrapper from '../assets/wrappers/PageWrapper';
import BackNav from './BackNav';

const PageWrapper = ({ children, title }) => {
  return (
    <Wrapper>
      <div>
        <BackNav title={title} />
      </div>
      <div>{children}</div>
    </Wrapper>
  );
};
export default PageWrapper;
