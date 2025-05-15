import { grayColor } from "@/app/styles/colors";
import { Typography, TypographyProps } from "@mui/material";

export default function SubtitleSm(props: TypographyProps) {
  return (
    <Typography
      {...props}
      sx={{
        fontWeight: 100,
        fontSize: {
          xs: "27px",
          lg: "33px",
        },
        color: grayColor.grayColorDarken1,
        lineHeight: "36px",
        ...props.sx,
      }}
    >
      {props.children}
    </Typography>
  );
}
