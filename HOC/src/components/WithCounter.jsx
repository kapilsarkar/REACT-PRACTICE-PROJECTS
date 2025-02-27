import { useState } from "react";

const withCounter = (OldComponent) => {
  return function EnhancedComponent(props) {
    const [count, setCount] = useState(0);
    return (
      <OldComponent
        {...props}
        count={count}
        incrementCount={() => setCount(count + 1)}
      />
    );
  };
};

export default withCounter;
