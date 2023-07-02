import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./styles/Header.css";

function Header({ userData }) {
  const navigate = useNavigate();
  const location = useLocation();

  function exit() {
    localStorage.removeItem("jwt");
    navigate("/sign-in");
  }

  return (
    <header className="header">
      <div className="logo header__logo">
        <ul className="header__navigation">
          {location.pathname === "/sign-in" && (
            <li>
              <Link to="/sign-up" className="header__link">
                Регистрация
              </Link>
            </li>
          )}
          {location.pathname === "/sign-up" && (
            <li>
              <Link to="/sign-in" className="header__link">
                Войти
              </Link>
            </li>
          )}
          {location.pathname === "/mesto" && (
            <>
              <p className="header__user-id">{userData.data?.email}</p>
              <li>
                <button onClick={exit} className="header__btn-exit">
                  Выйти
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
}

export default Header;
