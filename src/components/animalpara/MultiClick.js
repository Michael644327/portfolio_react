import React, { useState } from 'react';

const MultiClick = ({ onMultiClick, clickThreshold, children }) => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(prevCount => prevCount + 1);
    if (clickCount + 1 === clickThreshold) {
      onMultiClick();
      setClickCount(0); // 重置點擊次數
    }
  };

  return (
    <div onClick={handleClick}>
      {children}
    </div>
  );
};

export default MultiClick;