import React, { ReactNode } from "react";
import Header from "../header/header";
import "./content-frame.scss";

type ContentFrameProps = {
  children: ReactNode;
};

function ContentFrame({ children }: ContentFrameProps): JSX.Element {
  return (
    <div className="content-frame">
      <Header />
      {children}
    </div>
  );
}

export default ContentFrame;
