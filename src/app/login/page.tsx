"use client";
import { Box } from "@mui/material";
import Title from "../components/Typography/Title";
import Subtitle from "../components/Typography/Subtitle";
import EmailIcon from "@mui/icons-material/Email";
import Paragraph from "../components/Typography/Paragraph";
import CustomDivider from "../components/Divider";
import CustomModalPassword from "../components/Modals/CustomModalPassword";
import { useState } from "react";
import AuthPageLayout from "../components/Layouts/AuthPageLayout";
import CustomTextField from "../components/Form/CustomTextField";
import CustomCheckbox from "../components/Form/CustomCheckbox";
import CustomButton from "../components/Form/CustomButton";

export default function Login() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <AuthPageLayout>
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
          flexDirection: { xs: "column", lg: "row" },
          gap: { xs: 2, lg: 0 },
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <CustomCheckbox
          label="Login automático (lembrar o usuário)"
          defaultChecked
        />
        <Paragraph
          fontWeight={300}
          sx={{ cursor: "pointer", textDecoration: "none" }}
          onClick={() => setOpenModal(true)}
        >
          Esqueci a minha senha
        </Paragraph>
      </Box>
      <CustomButton label="Entrar" onClick={() => alert("Login")} />
      <CustomDivider />
      <Box sx={{ width: "80%", display: "flex", justifyContent: "left" }}>
        <Paragraph onClick={() => (window.location.href = "/register")}>
          + Criar Conta
        </Paragraph>
      </Box>
      <CustomModalPassword
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </AuthPageLayout>
  );
}
