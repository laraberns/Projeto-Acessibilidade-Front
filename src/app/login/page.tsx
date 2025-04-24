import { Box } from "@mui/material";
import BannerPcImage from "../components/BannerPCImage";
import Title from "../components/Typography/Title";
import Subtitle from "../components/Typography/Subtitle";
import CustomTextField from "../components/CustomTextField";
import EmailIcon from "@mui/icons-material/Email";

export default function Login() {
  return (
    <Box display="flex" height="100vh" width="100vw">
      <BannerPcImage />
      <Box
        flex={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        px={4}
        gap={2}
      >
        <Title>👋 Olá, seja bem-vindo(a)!</Title>
        <Subtitle>Acesse sua rotina com facilidade</Subtitle>
        <CustomTextField
          label="Email"
          placeholder="ana@email.com"
          icon={<EmailIcon />}
        />
      </Box>
    </Box>
  );
}
