
import { Button } from "@mui/material";
import { orangeColor, whiteColor } from "../styles/colors";

export default function CustomButton({ label, onClick }: any) {
  return (
    <Button
      onClick={onClick}
      sx={{
        backgroundColor: orangeColor.orangeColorPrimaryBase,
        color: whiteColor.whiteColorBase,
        fontSize: "19px",
        lineHeight: "20px",
        fontWeight: 700,
        width: "80%",
        borderRadius: "8px",
        paddingY: "12px",
        textTransform: "none",
        "&:hover": {
          backgroundColor: orangeColor.orangeColorDarken1,
        },
      }}
    >
      {label}
    </Button>
  );
}
