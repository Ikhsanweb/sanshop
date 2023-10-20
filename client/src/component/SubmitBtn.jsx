import { useNavigation } from 'react-router-dom';
import Button from './Button';

const SubmitBtn = ({ formBtn }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <Button type="submit" disabled={isSubmitting}>
      {isSubmitting ? 'submitting ....' : 'submit'}
    </Button>
  );
};
export default SubmitBtn;
