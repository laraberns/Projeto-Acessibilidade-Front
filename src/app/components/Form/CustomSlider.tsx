"use client";

import { Slider, Box } from "@mui/material";
import Paragraph from "../Typography/Paragraph";
import { grayColor, orangeColor } from "@/app/styles/colors";

interface Mark {
  value: number;
  label: string;
}

interface CustomSliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  marks: Mark[];
  min?: number;
  max?: number;
}

export default function CustomSlider({
  label,
  value,
  onChange,
  marks,
  min = 0,
  max = 3,
}: CustomSliderProps) {
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
