import { Box, InputAdornment, TextField, TextFieldProps } from "@mui/material";
import { grayColor, orangeColor, whiteColor } from "../../styles/colors";
import { ReactNode } from "react";

interface CustomTextFieldProps extends Omit<TextFieldProps, "variant"> {
  icon?: ReactNode;
  required?: boolean;
}

export default function CustomTextField({
  icon,
  required = true,
  label,
  placeholder,
  ...rest
}: CustomTextFieldProps) {
  return (
    <Box sx={{ width: "80%" }}>
      <TextField
        fullWidth
        required={required}
        variant="outlined"
        label={label}
        placeholder={placeholder}
        InputProps={{
          startAdornment: icon ? (
            <InputAdornment
              position="start"
              sx={{ color: grayColor.grayColorPrimaryLigthen2 }}
            >
              {icon}
            </InputAdornment>
          ) : undefined,
        }}
        InputLabelProps={{
          shrink: true,
          sx: {
            color: orangeColor.orangeColorDarken1,
            fontWeight: 700,
            fontSize: "19px",
            paddingRight: "10px",
            backgroundColor: whiteColor.whiteColorBase,
            "&.Mui-focused": {
              color: orangeColor.orangeColorDarken1,
            },
          },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: orangeColor.orangeColorDarken1,
              borderRadius: "10px",
              borderWidth: "2px",
            },
            "&:hover fieldset": {
              borderColor: orangeColor.orangeColorDarken1,
            },
            "&.Mui-focused fieldset": {
              borderColor: orangeColor.orangeColorDarken1,
            },
            "& input::placeholder": {
              color: grayColor.grayColorPrimaryLigthen2,
            },
          },
        }}
        {...rest}
      />
    </Box>
  );
}
