import { useNavigation } from 'react-router-dom';
import Button from './Button';
import Spinner from './Spinner';

const SubmitBtn = ({ formBtn }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <Button type="submit" disabled={isSubmitting}>
      {isSubmitting ? <Spinner /> : 'submit'}
    </Button>
  );
};
export default SubmitBtn;
