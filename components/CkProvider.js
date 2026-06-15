"use client";

import { CookiesProvider } from "react-cookie";

export default function CkProvider({ children }) {
  return <CookiesProvider>{children}</CookiesProvider>;
}
