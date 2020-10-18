const initialState = {
  pizzas: [],
  isLoaded: false
}

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PIZZAS": {
      return {
        ...state,
        pizzas: action.payload
      }
    }
    case "LOADER":
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  }
}
export default pizzas;
