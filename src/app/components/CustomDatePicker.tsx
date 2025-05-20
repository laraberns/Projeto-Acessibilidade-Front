import { Box } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ptBR } from "date-fns/locale";
import { orangeColor, whiteColor } from "../styles/colors";

interface CustomDatePickerProps {
  label: string;
  value: Date | null;
  onChange: (newValue: Date | null) => void;
  required?: boolean;
}

export default function CustomDatePicker({
  label,
  value,
  onChange,
  required = true,
}: CustomDatePickerProps) {
  return (
    <Box sx={{ width: "80%" }}>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
        <DatePicker
          label={label}
          value={value}
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
            },
          }}
          onChange={onChange}
          slotProps={{
            textField: {
              fullWidth: true,
              required: required,
              InputLabelProps: {
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
              },
            },
          }}
        />
      </LocalizationProvider>
    </Box>
  );
}
