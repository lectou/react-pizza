const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0
};

// price for each object
const getPrice = (arr) => arr.reduce((sum, el) => el.price + sum, 0);

const getTotalPrice = (obj) => Object.values(obj).reduce((sum, el) => sum + el.totalPrice, 0);
const getTotalCount = (obj) => Object.values(obj).reduce((sum, el) => sum + el.items.length, 0);

const basket = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_BASKET': {

      //create new object or add object
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      //create new key for items-object
      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getPrice(currentPizzaItems)
        }
      };

      const totalCount = getTotalCount(newItems);
      const totalPrice = getTotalPrice(newItems);

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }
    case 'DELETE_BASKET_ITEM': {
      const newItems = {
        ...state.items,
      };
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;
      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    }
    case 'PLUS_BASKET_ITEM': {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getPrice(newObjItems),
        },
      };
      const totalCount = getTotalCount(newItems);
      const totalPrice = getTotalPrice(newItems);

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }
    case 'MINUS_BASKET_ITEM': {
      const oldItems = state.items[action.payload].items;
      const newObjItems =
        oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getPrice(newObjItems),
        },
      };

      const totalCount = getTotalCount(newItems);
      const totalPrice = getTotalPrice(newItems);

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }
    case 'CLEAR_BASKET':
      return { totalPrice: 0, totalCount: 0, items: {} };
    default:
      return state;
  }
}

export default basket;