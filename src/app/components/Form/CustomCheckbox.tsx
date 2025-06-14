import { Checkbox, FormControlLabel } from "@mui/material";
import { orangeColor, blackColor } from "../../styles/colors";
import { ICustomCheckbox } from "@/app/interfaces/ICustomCheckbox";

export default function CustomCheckbox({ label, ...props }: ICustomCheckbox) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          {...props}
          sx={{
            color: orangeColor.orangeColorPrimaryBase,
            "&.Mui-checked": {
              color: orangeColor.orangeColorPrimaryBase,
            },
          }}
        />
      }
      label={label}
      sx={{
        "& .MuiFormControlLabel-label": {
          color: blackColor.blackColorBase,
          fontSize: "19px",
          fontWeight: 700,
        },
      }}
    />
  );
}
