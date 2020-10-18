const initialState = {
  category: null,
  sort: {
    type: "popular",
    order: "desc"
  },
};

const filter = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SORT": {
      return {
        ...state,
        sort: action.payload
      }
    }
    case "SET_CATEGORY": {
      return {
        ...state,
        category: action.payload
      }
    }
    default:
      return state;
  }
}
export default filter;
