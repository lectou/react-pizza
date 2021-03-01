import React, { useEffect, useCallback } from 'react'
import { Categories, SortPopup, PizzaBlock, PizzaLoading } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { getPizzas } from '../redux/actions/pizzas';
import { setCategory, setSort } from '../redux/actions/filter';
import { addPizzaToCart } from '../redux/actions/cart';

const Home = () => {

  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.pizzas);
  const loader = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sort } = useSelector(({ filter }) => filter);
  const CartItems = useSelector(({ cart }) => cart.items);

  const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const sortIems = [
    { name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавит', type: 'name', order: 'asc' },
  ];

  useEffect(() => {
    dispatch(getPizzas(category, sort))
  }, [category, sort]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = useCallback((type) => {
    dispatch(setSort(type));
  }, []);

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          items={sortIems}
          activeSortType={sort.type}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title content__title-margin">Все пиццы</h2>
      <div className="content__items">
        {
          loader
            ? items.map(el => (
              <PizzaBlock
                key={el.id}
                addedCount={CartItems[el.id] && CartItems[el.id].items.length}
                onClickAddPizza={handleAddPizzaToCart}
                {...el}
              />
            ))
            : Array(10).fill(0).map((_, index) => <PizzaLoading key={index} />)
        }
      </div>
    </div>
  )
}

export default Home;
