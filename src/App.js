import React from 'react';
import useCounter from 'hooks/useCounter';

function App() {
  const { count, plus } = useCounter(10, () => {});

  return (
    <div className='App'>
      <span>當前數字：{count}</span>
      <button
        onClick={() => {
          plus(1);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default App;
