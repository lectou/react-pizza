export const addPizzaToBasket = (obj) => ({ type: 'ADD_PIZZA_BASKET', payload: obj });
export const deleteBasketItem = (id) => ({ type: 'DELETE_BASKET_ITEM', payload: id });
export const plusBasketItem = (id) => ({ type: 'PLUS_BASKET_ITEM', payload: id });
export const minusBasketItem = (id) => ({ type: 'MINUS_BASKET_ITEM', payload: id });
export const clearBasket = () => ({ type: 'CLEAR_BASKET' });

