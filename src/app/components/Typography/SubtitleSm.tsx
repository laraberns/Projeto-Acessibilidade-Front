import { grayColor } from "@/app/styles/colors";
import { Typography, TypographyProps } from "@mui/material";

export default function SubtitleSm({ sx, fontWeight = 100, ...props }: TypographyProps) {
  return (
    <Typography
      {...props}
      sx={{
        fontWeight,
        fontSize: {
          xs: "27px",
          lg: "33px",
        },
        color: grayColor.grayColorDarken1,
        lineHeight: "36px",
        ...sx,
      }}
    >
      {props.children}
    </Typography>
  );
}
