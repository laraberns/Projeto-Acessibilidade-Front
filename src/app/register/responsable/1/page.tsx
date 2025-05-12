"use client";

import { Box } from "@mui/material";
import BannerPcImage from "../../../components/BannerPCImage";
import CustomTextField from "../../../components/CustomTextField";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import CustomButton from "../../../components/CustomButton";
import TitleSm from "@/app/components/Typography/TitleSm";
import ParagraphSm from "@/app/components/Typography/ParagraphSm";
import CustomSelectField from "@/app/components/CustomSelectField";
import { useState } from "react";
import CustomDivider from "@/app/components/Divider";
import Paragraph from "@/app/components/Typography/Paragraph";

export default function ResponsablePage1() {
  const [profileType, setProfileType] = useState<string>("responsable");

  const handleProfileTypeChange = (event: any) => {
    setProfileType(event.target.value as string);
  };

  return (
    <Box display="flex">
      <BannerPcImage />
      <Box
        flex={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        px={5}
        gap={2}
      >
        <TitleSm>Criar Conta – Responsável</TitleSm>
        <ParagraphSm>
          Você será responsável por alguém que usará o sistema
        </ParagraphSm>
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
          <CustomSelectField
            label="Tipo de perfil"
            options={[
              { label: "Sou Responsável", value: "responsable" },
              { label: "Sou Usuário Principal", value: "main" },
            ]}
            value={profileType}
            onChange={handleProfileTypeChange}
          />
          <CustomTextField label="Nome completo" placeholder="Maria da Silva" />
          <CustomTextField
            label="E-mail"
            placeholder="maria@email.com"
            icon={<EmailIcon />}
          />
          <CustomTextField
            label="Telefone"
            placeholder="(11) 91234-5678"
            icon={<PhoneIcon />}
          />
          <CustomTextField label="Senha" placeholder="********" />
          <CustomTextField label="Confirmar senha" placeholder="********" />
        </Box>
        <CustomButton
          label="Continuar"
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
          <Paragraph>Já tem conta? Faça login</Paragraph>
        </Box>
      </Box>
    </Box>
  );
}
