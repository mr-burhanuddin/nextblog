"use client";
import Link from "next/link";
import React from "react";
import { NavLinks } from "./NavbarData";
import style from "./page.module.css";
import { BiBadgeCheck } from "react-icons/bi";
import { signOut, useSession } from "next-auth/react";
const Navbar = () => {
  const session = useSession();
  return (
    <div className={style.container}>
      <Link href="/" className={style.logo}>
        Hnoorani <BiBadgeCheck color="#17594A" />
      </Link>
      <div className={style.links}>
        {NavLinks.map((link) => (
          <>
            {link.public && (
              <Link key={link.id} href={link.url} className={style.link}>
                {link.title}
              </Link>
            )}
          </>
        ))}
        {session.status === "authenticated" && (
          <>
            {NavLinks.map((link) => (
              <>
                {link.public === false && (
                  <Link key={link.id} href={link.url} className={style.link}>
                    {link.title}
                  </Link>
                )}
              </>
            ))}
            <button className={style.logout} onClick={signOut}>
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
