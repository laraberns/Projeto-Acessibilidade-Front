import { Box } from "@mui/material";
import BannerPcImage from "../components/BannerPCImage";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";

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
      </Box>
    </Box>
  );
}
