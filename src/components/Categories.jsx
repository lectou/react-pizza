import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types';

const Categories = React.memo(function Categories({ items, activeCategory, onClickCategory }) {

  const [menuButton, setMenuButton] = useState(false);
  const [categoriesHeight, setCategoriesHeight] = useState("50px");
  const menuRef = useRef();

  const toggleMenuButton = () => {
    setMenuButton(!menuButton);
    setCategoriesHeight(!menuButton ? "500px" : "50px")
  };

  const OutsideClick = (e) => {
    if (!e.path.includes(menuRef.current)) {
      setMenuButton(false);
      setCategoriesHeight("50px")
    }
  }

  useEffect(() => {
    document.body.addEventListener('click', OutsideClick);
  }, [])



  return (
    <div className="categories">
      <div className="wrapper" style={{ maxHeight: `${categoriesHeight}` }}>
        <button ref={menuRef} onClick={toggleMenuButton} className="categories__button button button--black">Menu</button>
        <ul>
          <li
            className={activeCategory === null ? 'active' : ''}
            onClick={() => onClickCategory(null)}
          >
            Все
          </li>
          {items &&
            items.map((el, i) => (
              <li
                className={activeCategory === i ? 'active' : ''}
                onClick={() => onClickCategory(i)}
                key={`${el}_${i}`}
              >{el}</li>
            ))}
        </ul>
      </div>
    </div>
  )
});
Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  onClickCategory: PropTypes.func
}
Categories.defaultProps = { activeCategory: null, items: [] };

export default Categories;