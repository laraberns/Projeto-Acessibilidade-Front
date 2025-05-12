import { grayColor } from "@/app/styles/colors";
import { Typography } from "@mui/material";

export default function ParagraphModal({ ...props }) {
  return (
    <Typography
      sx={{
        fontWeight: 100,
        fontSize: {
          xs: "22px",
          lg: "28px",
        },
        color: grayColor.grayColorDarken1,
        lineHeight: "32px",
      }}
    >
      {props.children}
    </Typography>
  );
}
