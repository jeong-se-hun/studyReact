import Card from './Card';
import useCounter from '../hookd/use-conuter';

const ForwardCounter = () => {
  const counter = useCounter('+');

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
