import React from "react";
import style from "./page.module.css";

const layout = ({ children }) => {
  return (
    <div className={style.container}>
      <div className={style.sidebar}>Sidebar</div>
      <div className={style.main}>{children}</div>
    </div>
  );
};

export default layout;
