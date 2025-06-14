"use client";

import { Slider, Box } from "@mui/material";
import Paragraph from "../Typography/Paragraph";
import { grayColor, orangeColor } from "@/app/styles/colors";
import { ICustomSlider } from "@/app/interfaces/ICustomSlider";

export default function CustomSlider({
  label,
  value,
  onChange,
  marks,
  min = 0,
  max = 3,
}: ICustomSlider) {
  return (
    <Box sx={{ width: "100%", mt: 3, display: "flex", flexDirection: "column", gap: 2 }}>
      <Paragraph>{label}</Paragraph>
      <Slider
        value={value}
        min={min}
        max={max}
        step={1}
        marks={marks}
        onChange={(_, newValue) => onChange(newValue as number)}
        sx={{
          color: orangeColor.orangeColorPrimaryBase,
          ml: 2,
          "& .MuiSlider-markLabel": {
            fontSize: 14,
            color: grayColor.grayColorDarken2,
            fontWeight: 500,
          },
        }}
      />
    </Box>
  );
}
