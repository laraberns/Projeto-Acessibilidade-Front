// components/layouts/AuthPageLayout.tsx
"use client";

import { Box } from "@mui/material";
import BannerPcImage from "../BannerPCImage";
import { ReactNode } from "react";

interface AuthPageLayoutProps {
  children: ReactNode;
}

export default function AuthPageLayout({ children }: AuthPageLayoutProps) {
  return (
    <Box display="flex" height="100vh">
      <BannerPcImage />
      <Box
        flex={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        px={5}
        gap={2}
      >
        {children}
      </Box>
    </Box>
  );
}
