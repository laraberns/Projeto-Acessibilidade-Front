import { Box, Typography } from "@mui/material";
import { grayColor, blackColor, whiteColor } from "../styles/colors";

interface CustomCardHomeProps {
  title: string;
  description: string;
}

export default function CustomCardHome({
  title,
  description,
}: CustomCardHomeProps) {
  return (
    <Box
      sx={{
        backgroundColor: whiteColor.whiteColorBase,
        borderRadius: 3,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
        padding: 3,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: 500,
          color: grayColor.grayColorDarken2,
          lineHeight: "20px",
        }}
      >
        {title.toUpperCase()}
      </Typography>

      <Typography
        sx={{
          fontSize: "23px",
          fontWeight: 500,
          color: blackColor.blackColorBase,
          lineHeight: "24px",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}
