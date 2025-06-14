"use client";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import "./styles/globals.css";
import CustomToast from "./components/CustomToast";

export default function Layout({ children }: { children: React.ReactNode }) {
  const metadata = {
    title: "Entendo seu dia",
  };

  const theme = createTheme({
    typography: {
      fontFamily: ["Source Sans 3, sans-serif"].join(","),
    },
  });

  return (
    <html lang="pt-br">
      <head>
        <title>{metadata.title}</title>
      </head>
      <body>
        <ThemeProvider theme={theme}>
          {children}
          <CustomToast />
        </ThemeProvider>
      </body>
    </html>
  );
}
