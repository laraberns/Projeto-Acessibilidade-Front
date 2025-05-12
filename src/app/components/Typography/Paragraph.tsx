import { blackColor } from "@/app/styles/colors";
import { Typography, TypographyProps } from "@mui/material";

type ParagraphProps = TypographyProps & {
  fontWeight?: number;
};

export default function Paragraph({
  fontWeight = 700,
  onClick,
  ...props
}: ParagraphProps) {
  return (
    <Typography
      {...props}
      onClick={onClick}
      sx={{
        fontWeight,
        fontSize: {
          xs: "16px",
          lg: "19px",
        },
        color: blackColor.blackColorBase,
        lineHeight: "20px",
        cursor: onClick ? "pointer" : "inherit",
        ...(props.sx || {}),
      }}
    >
      {props.children}
    </Typography>
  );
}
