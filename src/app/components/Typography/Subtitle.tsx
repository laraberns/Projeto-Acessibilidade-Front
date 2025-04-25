import { grayColor } from "@/app/styles/colors";
import { Typography, TypographyProps } from "@mui/material";

export default function Subtitle(props: TypographyProps) {
  return (
    <Typography
      {...props}
      sx={{
        fontWeight: 100,
        fontSize: {
          xs: "32px",
          lg: "48px",
        },
        color: grayColor.grayColorDarken1,
        lineHeight: "44px",
        ...props.sx,
      }}
    >
      {props.children}
    </Typography>
  );
}
