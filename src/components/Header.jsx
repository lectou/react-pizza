import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/pizza-logo.svg';
import { useSelector } from 'react-redux';
import Button from './Button';

function Header() {
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="40" src={logo} alt="logo" />
            <div>
              <h1>Pizza</h1>
              <p>самая вкусная пицца</p>
            </div>
          </div>
        </Link>
        <div className="header__cart">
          <Link to="/cart">
            <Button className="button--info">
              <span>{totalPrice} &#8372;</span>
              <div className="button__delimiter"></div>
              {(totalCount > 0)
                ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                      fill="white" width="18px" height="18px">
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                    </svg>
                    <span>{totalCount}</span>
                  </>
                )
                : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    fill="white" width="18px" height="18px">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M1.41 1.13L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.41-1.41L1.41 1.13zM7 15l1.1-2h2.36l2 2H7zM20 4H7.12l2 2h9.19l-2.76 5h-1.44l1.94 1.94c.54-.14.99-.49 1.25-.97l3.58-6.49C21.25 4.82 20.76 4 20 4zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z" />
                  </svg>
                )
              }
            </Button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Header
