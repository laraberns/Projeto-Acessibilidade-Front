import { Box } from "@mui/material";
import React from "react";

export default function BannerPcImage() {
  return (
    <Box
      sx={{
        display: {
          xs: "none",
          lg: "block",
        },
      }}
    >
      <img
        src="/images/banner-pc.png"
        alt="Imagem de banner com menina e mãe abraçadas"
        style={{ height: "100vh", width: "auto" }}
      />
    </Box>
  );
}
