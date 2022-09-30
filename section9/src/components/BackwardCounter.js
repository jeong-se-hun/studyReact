import Card from './Card';
import useCounter from '../hookd/use-conuter';

const BackwardCounter = () => {
  const counter = useCounter('-');

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
