"use client";

import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import CustomButton from "../components/Form/CustomButton";
import Title from "../components/Typography/Title";
import Subtitle from "../components/Typography/Subtitle";
import Paragraph from "../components/Typography/Paragraph";

export default function NotFound() {
  const router = useRouter();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        bgcolor: "#f5f5f5",
        padding: 4,
        gap: 2
      }}
    >
      <Title>404</Title>
      <Subtitle variant="h5" gutterBottom>
        Opa! Página não encontrada.
      </Subtitle>
      <Paragraph variant="body1" sx={{ mb: 3 }}>
        Parece que a página que você está procurando não existe.
      </Paragraph>
      <Box sx={{ maxWidth: 600 }}>
        <CustomButton
          onClick={() => router.push("/home")}
          label={" Voltar para a Home"}
        />
      </Box>
    </Box>
  );
}
