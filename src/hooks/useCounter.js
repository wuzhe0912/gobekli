import { useState, useEffect } from 'react';

const useCounter = (initalCount, callbackFunction) => {
  const [count, setCount] = useState(initalCount);

  useEffect(() => {
    callbackFunction();
  }, [count]);

  const plus = (value) => {
    setCount(count + value);
  };

  return { count, plus };
};

export default useCounter;
