import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppRoute } from "../../const";
import { LogInPage } from "../../pages/log-in";
import { RegistrationPage } from "../../pages/registration";
import MainFrame from "../main-frame/main-frame";
import { RegisterVerify } from "../register-verify";

// TODO цикл редирикта на main сделан специально, можно было и 404 страницу сообразить.

function App() {
  return (
    <Routes>
      <Route path={AppRoute.Main} element={<MainFrame />}>
        <Route path={AppRoute.Registration} element={<RegistrationPage />} />
        <Route path={AppRoute.LogIn} element={<LogInPage />} />
      </Route>
      <Route path={AppRoute.RegisterVerify} element={<RegisterVerify />} />
      <Route path="*" element={<Navigate to={AppRoute.Main} />} />
    </Routes>
  );
}

export default App;
