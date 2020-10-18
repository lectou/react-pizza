import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames';

const SortPopup = React.memo(function SortPopup({ items, activeSortType, onClickSortType }) {

  const [visiblePopup, setVisiblePopup] = useState(false);
  const sortRef = useRef();
  const activeItem = items.find(el => el.type === activeSortType).name;

  const handleOutsideClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  }

  // on select active class
  const selectItem = (index) => {
    onClickSortType(index);
    setVisiblePopup(false);
  }

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, [])

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup)
  }

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          className={classNames({ "rotated": visiblePopup })}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24" fill="black"
          width="18px" height="18px">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M7 10l5 5 5-5H7z" />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={toggleVisiblePopup}>{activeItem}</span>
      </div>
      {visiblePopup &&
        <div className="sort__popup">
          <ul>
            {items &&
              items.map((el, i) => (
                <li
                  className={activeSortType === el.type ? 'active' : ''}
                  onClick={() => selectItem(el.type)}
                  key={`${el.name}_${i}`}
                >
                  {el.name}
                </li>
              ))
            }
          </ul>
        </div>
      }
    </div>
  )
})

export default SortPopup;
