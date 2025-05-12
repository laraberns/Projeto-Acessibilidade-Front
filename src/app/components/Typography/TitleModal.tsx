import { grayColor } from "@/app/styles/colors";
import { Typography, TypographyProps } from "@mui/material";

export default function TitleModal(props: TypographyProps) {
  return (
    <Typography
      {...props}
      sx={{
        fontWeight: 600,
        color: grayColor.grayColorDarken1,
        fontSize: {
          xs: "36px",
          lg: "48px",
        },
        lineHeight: "52px",
        ...props.sx,
      }}
    >
      {props.children}
    </Typography>
  );
}
