import { Button } from "@mui/material";
import { orangeColor, whiteColor, redColor } from "../../styles/colors";
import { ICustomButton } from "@/app/interfaces/ICustomButton";

export default function CustomButton({
  label,
  onClick,
  variant = "default",
}: ICustomButton) {
  const isCancel = variant === "cancel";
  const isDanger = variant === "danger";

  return (
    <Button
      onClick={onClick}
      sx={{
        backgroundColor: isCancel
          ? "transparent"
          : isDanger
          ? redColor.redColorBase
          : orangeColor.orangeColorPrimaryBase,
        color: isCancel
          ? orangeColor.orangeColorPrimaryBase
          : whiteColor.whiteColorBase,
        fontSize: "19px",
        lineHeight: "20px",
        fontWeight: 700,
        width: "80%",
        borderRadius: "8px",
        paddingY: "12px",
        textTransform: "none",
        boxShadow: "none",
        border: `2px solid ${
          isDanger ? redColor.redColorBase : orangeColor.orangeColorPrimaryBase
        }`,
        "&:hover": {
          backgroundColor: isCancel
            ? "rgba(0,0,0,0.04)"
            : isDanger
            ? redColor.redColorBase
            : orangeColor.orangeColorDarken1,
        },
      }}
    >
      {label}
    </Button>
  );
}
