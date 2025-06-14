import {
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import { grayColor, orangeColor, whiteColor } from "../../styles/colors";
import { ICustomSelectField } from "@/app/interfaces/ICustomSelectField";

export default function CustomSelectField({
  label,
  icon,
  required = true,
  options,
  value,
  onChange,
  disabled = false,
  ...rest
}: ICustomSelectField) {
  return (
    <Box sx={{ width: "80%" }}>
      <FormControl fullWidth required={required} disabled={disabled}>
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
          disabled={disabled}
          input={
            <OutlinedInput
              startAdornment={
                icon ? (
                  <InputAdornment
                    position="start"
                    sx={{ color: grayColor.grayColorPrimaryLigthen2 }}
                  >
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
