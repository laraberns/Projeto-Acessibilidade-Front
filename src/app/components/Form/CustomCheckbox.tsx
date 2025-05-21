import { Checkbox, FormControlLabel, CheckboxProps } from "@mui/material";
import { orangeColor, blackColor } from "../../styles/colors";

interface CustomCheckboxProps extends CheckboxProps {
  label: string;
}

export default function CustomCheckbox({ label, ...props }: CustomCheckboxProps) {
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
