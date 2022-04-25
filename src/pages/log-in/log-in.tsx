import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogIn } from "../../components/log-in";
import { AppRoute } from "../../const";
import {
  getIsConfirm,
  getIsLoading,
  getToken,
  logInAction,
  logInConfirmAction,
} from "../../store/user-process-data";
import { LogInData } from "../../types/log-in-data";
import "./log-in.scss";

function LogInPage(): JSX.Element {
  const isLoading = useSelector(getIsLoading);
  const isConfirm = useSelector(getIsConfirm);
  const isToken = useSelector(getToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isToken) {
      navigate(`/${AppRoute.Main}`);
    }
  }, [isToken]);

  const onSubmit = (data: LogInData) => {
    if (!isConfirm) {
      dispatch(logInAction(data));
    } else {
      dispatch(logInConfirmAction(data));
    }
  };

  return (
    <div className="log-in">
      <LogIn isLoading={isLoading} isConfirm={isConfirm} onSubmit={onSubmit} />
    </div>
  );
}

export default LogInPage;
