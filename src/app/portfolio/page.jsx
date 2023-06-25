import React from "react";
import style from "./page.module.css";
import Link from "next/link";
const Portfolio = () => {
  return (
    <div className={style.container}>
      <div className={style.selectTitle}>Choose a gallery</div>
      <div className={style.items}>
        <Link href="/protfolio/designs" className={style.item}>
          <span className={style.title}>Designs</span>
        </Link>
        <Link href="/protfolio/designs" className={style.item}>
          <span className={style.title}>Designs</span>
        </Link>
        <Link href="/protfolio/designs" className={style.item}>
          <span className={style.title}>Designs</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
