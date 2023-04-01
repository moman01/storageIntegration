import React from 'react';
import './Cosmatic.css'
import { addToDb, removeFromdb } from '../../utilities/fakedb';
const Cosmatic = (props) => {
  const { name, price, id } = props.cosmatic;
  const addToCart = (id) => {
   addToDb(id)
  }

  const addToCartWithParam = ()=> addToCart(id)

  const removeFromCart = id => {
    removeFromdb(id);
}

  return (
    <div className='product'>
      <h2>Buy this : {name}</h2>
      <p>Only for :{price} $</p>
      <p><small>it has id : {id}</small></p>
      <button onClick={addToCartWithParam}>Add to cart</button>
      <button onClick={()=>addToCart(id)}>Purchase</button>
      <button onClick={()=> removeFromCart(id)}>Remove</button>
    </div>
  );
};

export default Cosmatic;