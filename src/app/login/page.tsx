"use client";

import { Box } from "@mui/material";
import BannerPcImage from "../components/BannerPCImage";
import Title from "../components/Typography/Title";
import Subtitle from "../components/Typography/Subtitle";
import CustomTextField from "../components/CustomTextField";
import EmailIcon from "@mui/icons-material/Email";
import CustomCheckbox from "../components/CustomCheckbox";
import Paragraph from "../components/Typography/Paragraph";
import CustomButton from "../components/CustomButton";
import CustomDivider from "../components/Divider";

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
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 3,
            justifyContent: "center",
            alignItems: "center",
            my: 2,
          }}
        >
          <CustomTextField
            label="Email"
            placeholder="ana@email.com"
            icon={<EmailIcon />}
          />
          <CustomTextField label="Senha" placeholder="********" />
        </Box>
        <Box
          sx={{
            width: "80%",
            display: "flex",
            flexDirection: {
              xs: "column",
              lg: "row",
            },
            gap: {
              xs: 2,
              lg: 0,
            },
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <CustomCheckbox
            label="Login automático (lembrar o usuário)"
            defaultChecked
          />
          <Paragraph fontWeight={300}>Esqueci a minha senha</Paragraph>
        </Box>
        <CustomButton
          label="Entrar"
          onClick={() => alert("Example showing other props works")}
        />
        <CustomDivider />
        <Box
          sx={{
            width: "80%",
            display: "flex",
            justifyContent: "left",
          }}
        >
          <Paragraph>+ Criar Conta</Paragraph>
        </Box>
      </Box>
    </Box>
  );
}
