import React from "react";
import style from "./page.module.css";
import {
  BiMailSend,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={style.container}>
      <div>
        &#169; {new Date().getFullYear()} Hnoorani. All Rights Reserved.
      </div>
      <div className={style.social}>
        <Link href="#">
          <BiMailSend fontSize="22px" className={style.socialicon} />
        </Link>
        <Link href="#">
          <BiLogoInstagramAlt fontSize="22px" className={style.socialicon} />
        </Link>
        <Link href="#">
          <BiLogoLinkedinSquare fontSize="22px" className={style.socialicon} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
