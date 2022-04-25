import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";
import { getToken, logOutAction } from "../../store/user-process-data";
import "./header.scss";

function Header(): JSX.Element {
  const token = useSelector(getToken);
  const dispatch = useDispatch();

  const onBtnClick = () => {
    dispatch(logOutAction());
  };

  return (
    <div className="header">
      <Link className="header__logo" to={`/${AppRoute.Main}`}>
        Логотип
      </Link>
      <nav>
        {!token ? (
          <>
            <Link to={AppRoute.Registration}>Регистрация</Link>
            <Link to={AppRoute.LogIn}>Войти</Link>
          </>
        ) : (
          <button type="button" onClick={onBtnClick}>
            Выйти
          </button>
        )}
      </nav>
    </div>
  );
}

export default Header;
