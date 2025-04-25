import { grayColor } from "@/app/styles/colors";
import { Typography, TypographyProps } from "@mui/material";

export default function Title(props: TypographyProps) {
  return (
    <Typography
      {...props}
      sx={{
        fontWeight: 600,
        color: grayColor.grayColorDarken1,
        fontSize: {
          xs: "48px",
          lg: "57px",
        },
        lineHeight: "64px",
        ...props.sx,
      }}
    >
      {props.children}
    </Typography>
  );
}
