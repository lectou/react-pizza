export const addPizzaToCart = (obj) => ({ type: 'ADD_PIZZA_CART', payload: obj });
export const deleteCartItem = (id) => ({ type: 'DELETE_CART_ITEM', payload: id });
export const plusCartItem = (id) => ({ type: 'PLUS_CART_ITEM', payload: id });
export const minusCartItem = (id) => ({ type: 'MINUS_CART_ITEM', payload: id });
export const clearCart = () => ({ type: 'CLEAR_CART' });

