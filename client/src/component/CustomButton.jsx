/* eslint-disable react/prop-types */
import { Button, BlackButton } from '../assets/wrappers/CustomButton';

const CustomButton = ({ children, text, path, isPrimary = false }) => {
  return <Button>{children}</Button>;
};
export default CustomButton;
