import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import { blackColor, grayColor } from "../../styles/colors";

interface SidebarMenuItemProps {
  icon: ReactNode;
  label: string;
  selected?: boolean;
  onClick?: () => void;
  showLabel?: boolean;
}

export default function SidebarMenuItem({
  icon,
  label,
  selected = false,
  onClick,
  showLabel = true,
}: SidebarMenuItemProps) {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: showLabel ? 1.5 : 0,
        px: showLabel ? 3 : 2,
        py: 2,
        color: selected
          ? blackColor.blackColorBase
          : grayColor.grayColorPrimaryLigthen5,
        cursor: "pointer",
        borderRadius: 2,
        boxShadow: selected ? "0 2px 6px rgba(0, 0, 0, 0.1)" : "none",
        backgroundColor: selected ? "#f9f9f9" : "transparent",
        transition: "0.2s",
        ":hover": {
          backgroundColor: grayColor.grayColorPrimaryLigthen1,
        },
        justifyContent: showLabel ? "flex-start" : "center",
      }}
    >
      {icon}
      {showLabel && (
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 500,
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </Typography>
      )}
    </Box>
  );
}
