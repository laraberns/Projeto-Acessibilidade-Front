import { Box, InputAdornment, TextField } from "@mui/material";
import { grayColor, orangeColor, whiteColor } from "../styles/colors";

export default function CustomTextField({ icon, ...props }: any) {
  return (
    <Box sx={{ width: "80%"}}>
      <TextField
        {...props}
        required
        variant="outlined"
        InputProps={{
          startAdornment: icon && (
            <InputAdornment
              position="start"
              sx={{ color: grayColor.grayColorPrimaryLigthen2 }}
            >
              {icon}
            </InputAdornment>
          ),
        }}
        InputLabelProps={{
          shrink: true,
          style: {
            color: orangeColor.orangeColorDarken1,
            fontWeight: 700,
            fontSize: "19px",
            paddingRight: "10px",
            backgroundColor: whiteColor.whiteColorBase,
          },
        }}
        sx={{
          width: "100%",
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
      />
    </Box>
  );
}
