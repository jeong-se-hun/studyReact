import { useState, useEffect, useCallback } from 'react';

const useCounter = type => {
  const [counter, setCounter] = useState(0);

  const typeCheck = useCallback(
    counter => {
      if (type === '+') return counter + 1;
      if (type === '-') return counter - 1;
    },
    [type]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => typeCheck(prevCounter));
    }, 1000);

    return () => clearInterval(interval);
  }, [typeCheck]);

  return counter;
};

export default useCounter;
