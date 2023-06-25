"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";

const Auth = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Auth;
