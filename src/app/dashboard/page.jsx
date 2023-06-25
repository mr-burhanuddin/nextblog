"use client";
import React from "react";
import style from "./page.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();
  if (session.status === "loading") {
    return <p>Loading...</p>;
  }
  if (session.status === "unauthenticated") {
    router.push("/dashboard/login");
  }
  if (session.status === "authenticated") {
    return (
      <div>
        <h1>hello</h1>
      </div>
    );
  }
};

export default Dashboard;
