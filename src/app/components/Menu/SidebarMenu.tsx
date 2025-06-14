"use client";

import { Box, IconButton, Avatar, useMediaQuery, Theme } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import AssessmentIcon from "@mui/icons-material/Assessment";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { whiteColor, grayColor } from "../../styles/colors";
import SidebarMenuItem from "./SidebarMenuItem";
import { useRouter, usePathname } from "next/navigation";
import { ISidebarMenu } from "@/app/interfaces/ISidebarMenu";

export default function SidebarMenu({ isAdmin }: ISidebarMenu) {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = isAdmin
    ? [
        {
          label: "Tela Inicial",
          icon: <HomeIcon sx={{ fontSize: 28 }} />,
          path: "/home",
        },
        {
          label: "Rotina da Ana",
          icon: <CalendarMonthIcon sx={{ fontSize: 28 }} />,
          path: "/activities",
        },
        {
          label: "Relatórios",
          icon: <AssessmentIcon sx={{ fontSize: 28 }} />,
          path: "/reports",
        },
      ]
    : [
        {
          label: "Tela Inicial",
          icon: <HomeIcon sx={{ fontSize: 28 }} />,
          path: "/home",
        },
        {
          label: "Minha Rotina",
          icon: <CalendarMonthIcon sx={{ fontSize: 28 }} />,
          path: "/activities",
        },
        {
          label: "Acessibilidade",
          icon: <AccessibilityNewIcon sx={{ fontSize: 28 }} />,
          path: "/accessibility",
        },
      ];

  return (
    <Box
      sx={{
        width: isMobile ? "80px" : "250px",
        minHeight: "100vh",
        backgroundColor: whiteColor.whiteColorBase,
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.05)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: isMobile ? 2 : 4,
      }}
    >
      <img
        src={isMobile ? "/images/logo-small.png" : "/images/logo.svg"}
        alt="Logo"
        style={{
          width: isMobile ? "80%" : "100%",
          padding: isMobile ? "10px 0" : "0 24px",
        }}
      />

      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        mt={isMobile ? 2 : 4}
        gap={isMobile ? 1 : 0}
      >
        {menuItems.map((item) => (
          <SidebarMenuItem
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={pathname === item.path}
            onClick={() => router.push(item.path)}
            showLabel={!isMobile}
          />
        ))}
      </Box>

      <Box
        sx={{
          width: "100%",
          mt: "auto",
          flexDirection: isMobile ? "column" : "row",
          px: isMobile ? 1 : 3,
          py: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: `1px solid ${grayColor.grayColorPrimaryLigthen1}`,
        }}
      >
        <Avatar
          sx={{ width: 32, height: 32, cursor: "pointer" }}
          onClick={() => router.push("/profile")}
        />
        <IconButton>
          <NotificationsIcon
            sx={{ fontSize: 24, color: grayColor.grayColorDarken1 }}
          />
        </IconButton>
      </Box>
    </Box>
  );
}
