import Axios from "axios";


export const setPizzas = (data) => ({ type: "SET_PIZZAS", payload: data });
export const loader = (value) => ({ type: "LOADER", payload: value });


//get pizzas thunk
export const getPizzas = (category, sort) => (dispatch) => {
  // dispatch(loader(false));
  Axios.get(`/pizzas?${category !== null
    ? `category=${category}` : ""}&_sort=${sort.type}&_order=${sort.order}`)
    .then(({ data }) => {
      dispatch(setPizzas(data));
      dispatch(loader(true));
    })
}

