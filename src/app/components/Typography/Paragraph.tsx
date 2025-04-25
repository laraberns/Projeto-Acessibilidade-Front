import { blackColor } from "@/app/styles/colors";
import { Typography, TypographyProps } from "@mui/material";

type ParagraphProps = TypographyProps & {
  fontWeight?: number;
};

export default function Paragraph({
  fontWeight = 700,
  ...props
}: ParagraphProps) {
  return (
    <Typography
      {...props}
      sx={{
        fontWeight,
        fontSize: {
          xs: "16px",
          lg: "19px",
        },
        color: blackColor.blackColorBase,
        lineHeight: "20px",
        ...(props.sx || {}),
      }}
    >
      {props.children}
    </Typography>
  );
}
