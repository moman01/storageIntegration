import React from 'react';
import { add, multifly } from '../../utilities/calculate';

const Shoes = () => {
  const first = 74;
  const second = 45;
  const result = multifly(first, second);
  const sum = add(first, second);
  return (
    <div>
      <h3>This is shoes Compo </h3>
      <p>Multiply : {result} and sum: {sum}</p>
    </div>
  );
};

export default Shoes;