import { Typography, TypographyProps } from "@mui/material";

export default function Subtitle(props: TypographyProps) {
  return (
    <Typography
      {...props}
      sx={{
        fontWeight: 100,
        fontSize: "48px",
        lineHeight: "44px",
        ...props.sx,
      }}
    >
      {props.children}
    </Typography>
  );
}
