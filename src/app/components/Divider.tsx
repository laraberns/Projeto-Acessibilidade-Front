import { Divider, Box } from "@mui/material";
import { grayColor } from "../styles/colors";

export default function CustomDivider() {
  return (
    <Box py={2} width="100%">
      <Divider sx={{ borderColor: grayColor.grayColorPrimaryLigthen1 }} />
    </Box>
  );
}
