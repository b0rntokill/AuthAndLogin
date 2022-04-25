import React from "react";
import { Outlet } from "react-router-dom";
import { ContentFrame } from "../content-frame";
import "./main-frame.scss";

function MainFrame() {
  return (
    <section className="main-frame">
      <ContentFrame>
        <Outlet />
      </ContentFrame>
    </section>
  );
}

export default MainFrame;
