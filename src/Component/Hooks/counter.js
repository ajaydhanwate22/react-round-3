import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);   //this is examples of usestate hook

  return (
    <div className="p-4 text-center">
      <p className="text-xl">You clicked {count} times</p>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={() => setCount(count + 1)}> Click me</button>
    </div>
  );
};

export default Counter;


// React Hooks are functions that let you use state and other React features in functional components. They were introduced in React 16.8 to enable developers to use state and lifecycle methods without writing a class component. Hooks simplify the code, make it easier to share logic between components, and improve readability and maintainability.


// Why Were Hooks Introduced?
// -Simplify Code and Reduce Boilerplate
// -Reusability of Stateful Logic
// -Separation of Concerns
// -Enhanced Functional Components

