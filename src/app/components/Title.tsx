import { Typography, TypographyProps } from "@mui/material";

export default function Title(props: TypographyProps) {
  return (
    <Typography
      {...props}
      sx={{
        fontWeight: 600,
        fontSize: "57px",
        lineHeight: "64px",
        ...props.sx,
      }}
    >
      {props.children}
    </Typography>
  );
}
