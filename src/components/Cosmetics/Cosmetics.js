import React, { useEffect, useState } from "react";
import { add } from "../../utilities/calculate";
import Cosmatic from "../Cosmatic/Cosmatic";
// import add from '../../utilities/calculate';

const Cosmetics = () => {
  const [cosmetics,setCosmetics] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data=>setCosmetics(data))
  },[])
  return (
    <div>
      <h1>Welcome to my cosmetics store </h1>
      {cosmetics.map((cosmetic) => (
        <Cosmatic
          key={cosmetic.id}
          cosmatic ={cosmetic}
        ></Cosmatic>
      ))}
    </div>
  );
};

export default Cosmetics;
