import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Hello: React.FunctionComponent<{ compiler: string, framework: string }> = (props) => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <div>{props.compiler}</div>
      <div>{props.framework}</div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById("root")
);
