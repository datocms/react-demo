// const init = () => {
//   let listener = document.addEventListener("snipcart.ready", e => {
//     console.log("snipcart initialized");
//   });
// };

const init = () => {
  Snipcart.api.cart.currency("usd");
};

const getInfo = () => {
  let cart = Snipcart.api.cart.get();
  let count = Snipcart.api.items.count();
  let items = Snipcart.api.items.all();
  let payload = {
    cart,
    count,
    items
  };
  console.log("SNIPCART INFO ", payload);
  return payload;
};

export default { init, getInfo };
