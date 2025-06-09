"use client";
import { Box, Alert, CircularProgress } from "@mui/material";
import Title from "../components/Typography/Title";
import Subtitle from "../components/Typography/Subtitle";
import EmailIcon from "@mui/icons-material/Email";
import Paragraph from "../components/Typography/Paragraph";
import CustomDivider from "../components/Divider";
import CustomModalPassword from "../components/Modals/CustomModalPassword";
import { useEffect, useState } from "react";
import AuthPageLayout from "../components/Layouts/AuthPageLayout";
import CustomTextField from "../components/Form/CustomTextField";
import CustomCheckbox from "../components/Form/CustomCheckbox";
import CustomButton from "../components/Form/CustomButton";
import { useRouter } from "next/navigation";

export default function Login() {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erroLogin, setErroLogin] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  const router = useRouter();

  // HARD CODED
  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth") || "{}");
    if (auth.isLoggedIn) {
      router.push("/home");
    } else {
      setIsCheckingAuth(false);
    }
  }, [router]);

  const handleLogin = () => {
    if (email === "ana@email.com" && senha === "123") {
      setErroLogin(false);
      localStorage.setItem(
        "auth",
        JSON.stringify({ isLoggedIn: true, isAdmin: false })
      );
      router.push("/home");
    } else if (email === "maria@email.com" && senha === "123") {
      setErroLogin(false);
      localStorage.setItem(
        "auth",
        JSON.stringify({ isLoggedIn: true, isAdmin: true })
      );
      router.push("/home");
    } else {
      setErroLogin(true);
    }
  };

  if (isCheckingAuth) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <CustomTextField
          label="Senha"
          placeholder="********"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        {erroLogin && (
          <Alert severity="error" sx={{ width: "80%" }}>
            Email ou senha incorretos.
          </Alert>
        )}
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

      <CustomButton label="Entrar" onClick={handleLogin} />
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
