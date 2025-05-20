import {
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  SelectChangeEvent,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import { grayColor, orangeColor, whiteColor } from "../styles/colors";
import { ReactNode } from "react";

interface CustomSelectFieldProps {
  label: string;
  icon?: ReactNode;
  required?: boolean;
  options: { label: string; value: string | number }[];
  value: string;
  onChange: (event: SelectChangeEvent) => void;
}

export default function CustomSelectField({
  label,
  icon,
  required = true,
  options,
  value,
  onChange,
  ...rest
}: CustomSelectFieldProps) {
  return (
    <Box sx={{ width: "80%" }}>
      <FormControl fullWidth required={required}>
        <InputLabel
          sx={{
            color: orangeColor.orangeColorDarken1,
            fontWeight: 700,
            fontSize: "19px",
            paddingRight: "10px",
            backgroundColor: whiteColor.whiteColorBase,
            "&.Mui-focused": {
              color: orangeColor.orangeColorDarken1,
            },
          }}
        >
          {label}
        </InputLabel>

        <Select
          value={value}
          onChange={onChange}
          input={
            <OutlinedInput
              startAdornment={
                icon ? (
                  <InputAdornment position="start" sx={{ color: grayColor.grayColorPrimaryLigthen2 }}>
                    {icon}
                  </InputAdornment>
                ) : undefined
              }
            />
          }
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: orangeColor.orangeColorDarken1,
              borderRadius: "10px",
              borderWidth: "2px",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: orangeColor.orangeColorDarken1,
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: orangeColor.orangeColorDarken1,
            },
            "& .MuiSelect-select": {
              color: grayColor.grayColorPrimaryLigthen2,
            },
          }}
          {...rest}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
