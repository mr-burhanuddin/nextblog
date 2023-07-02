"use client";
import React, { useState } from "react";
import style from "./page.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();
  const [selected, setSelected] = useState("blog");

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }
  if (session.status === "unauthenticated") {
    router.push("/login");
  }

  const onClick = (string) => {
    setSelected(string);
  };

  if (session.status === "authenticated") {
    return (
      <div className={style.container}>
        <aside className={style.aside}>
          <ul>
            <li onClick={() => onClick("blog")}>Add Blog</li>
            <li onClick={() => onClick("portfolio")}>Add Project</li>
            <li onClick={() => onClick("contact")}>Show Contact</li>
          </ul>
        </aside>
        <main className={style.main}>
          {selected === "blog" && <> Add Blog Form</>}
          {selected === "portfolio" && <>Add To Portfolio Form</>}
          {selected === "contact" && <>show Contact</>}
        </main>
      </div>
    );
  }
};

export default Dashboard;
