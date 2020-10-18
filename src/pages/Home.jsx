import React, { useEffect, useCallback, useState } from 'react'
import { Categories, SortPopup, PizzaBlock, PizzaLoading } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { getPizzas } from '../redux/actions/pizzas';
import { setCategory, setSort } from '../redux/actions/filter';
import { addPizzaToBasket } from '../redux/actions/basket';

const Home = () => {

  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.pizzas);
  const loader = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sort } = useSelector(({ filter }) => filter);
  const BasketItems = useSelector(({ basket }) => basket.items);

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

  const handleAddPizzaToBasket = (obj) => {
    dispatch(addPizzaToBasket(obj));
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
      <h1 className="content__title">Все пиццы</h1>
      <div className="content__items">
        {
          loader
            ? items.map(el => (
              <PizzaBlock
                key={el.id}
                addedCount={BasketItems[el.id] && BasketItems[el.id].items.length}
                onClickAddPizza={handleAddPizzaToBasket}
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
