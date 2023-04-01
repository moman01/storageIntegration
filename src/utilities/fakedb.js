// use local Storage to store data

const addToDb = (id) => {
  let shoppingCart = {};
//get the shopping cart
  const storedCart = localStorage.getItem("shoping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  else {
    shoppingCart = {};
  }

  //add  quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
    // localStorage.setItem(id,newQuantity)
  } else {
    shoppingCart[id] = 1;
    // localStorage.setItem(id, 1);
  }

  localStorage.setItem("shoping-cart", JSON.stringify(shoppingCart));
};
const removeFromdb = id => {
  const storedCart = localStorage.getItem('shoping-cart');
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shoping-cart", JSON.stringify(shoppingCart));
    }
  }
}
export {
  addToDb,
removeFromdb};
