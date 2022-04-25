import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { AppRoute } from "../../const";
import { getIsRegisterVerify, registerVerifyAction } from "../../store/user-process-data";

const regexParam = /\?key=/;

function RegisterVerify(): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();
  const isVerify = useSelector(getIsRegisterVerify);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(registerVerifyAction(location.search.replace(regexParam, "")));
  }, []);

  useEffect(() => {
    if (isVerify) {
      navigate(`/${AppRoute.Main}`);
    }
  }, [isVerify]);

  return <div>Подтверждаем регистрацию</div>;
}

export default RegisterVerify;
