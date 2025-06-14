import { Box } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ptBR } from "date-fns/locale";
import { orangeColor, whiteColor, grayColor } from "../../styles/colors";
import { ICustomTimePicker } from "@/app/interfaces/ICustomTimePicker";

export default function CustomTimePicker({
  label,
  value,
  onChange,
  required = true,
  error = false,
  helperText = "",
}: ICustomTimePicker) {
  return (
    <Box sx={{ width: "80%" }}>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
        <TimePicker
          label={label}
          value={value}
          ampm={false}
          onChange={onChange}
          sx={{
            "& .MuiPickersInputBase-root": {
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
            "& .MuiInputLabel-root": {
              color: orangeColor.orangeColorDarken1,
              fontWeight: 700,
              fontSize: "19px",
              paddingRight: "10px",
              backgroundColor: whiteColor.whiteColorBase,
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: orangeColor.orangeColorDarken1,
            },
          }}
          slotProps={{
            textField: {
              fullWidth: true,
              required: required,
              error: error,
              helperText: helperText,
            },
          }}
        />
      </LocalizationProvider>
    </Box>
  );
}
