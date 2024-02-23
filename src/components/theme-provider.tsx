"use client";

import type { ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";

export type ThemeProviderProps = {
  children: ReactNode
};

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <CssVarsProvider defaultMode="dark">
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
}
