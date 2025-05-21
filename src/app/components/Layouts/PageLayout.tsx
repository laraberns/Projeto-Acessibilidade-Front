"use client";

import { Box } from "@mui/material";
import SidebarMenu from "../Menu/SidebarMenu";
import { grayColor, whiteColor } from "../../styles/colors";
import SubtitleSm from "../Typography/SubtitleSm";
import Title from "../Typography/Title";

interface PageLayoutProps {
  isAdmin: boolean;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function PageLayout({
  isAdmin = false,
  title,
  subtitle,
  children,
}: PageLayoutProps) {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <SidebarMenu isAdmin={isAdmin} />

      <Box
        sx={{
          backgroundColor: grayColor.grayColorPrimaryLigthen1,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          py: 5,
          px: 3,
        }}
      >
        <Box
          sx={{
            backgroundColor: whiteColor.whiteColorBase,
            borderRadius: 2,
            padding: 4,
            width: "100%",
            height: "100%",
            boxShadow: "8px 8px 8px rgba(0,0,0,0.15)",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Title>{title}</Title>
          <SubtitleSm>{subtitle}</SubtitleSm>

          {children}
        </Box>
      </Box>
    </Box>
  );
}
