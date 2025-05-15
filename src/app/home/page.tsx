"use client";

import { Box } from "@mui/material";
import CustomCardHome from "../components/CustomCardHome";
import CustomMenuHome from "../components/CustomMenuHome";
import SubtitleSm from "../components/Typography/SubtitleSm";
import PageLayout from "../components/PageLayout";

const isAdmin = false;

export default function Home() {
  const userName = isAdmin ? "Maria" : "Ana";
  const subtitleText = isAdmin
    ? "Aqui está tudo o que você precisa saber da rotina da Ana 🧡"
    : "Aqui está tudo o que você precisa saber para o seu dia 🧡";

  const cardData = [
    {
      title: "Data Atual",
      description: "Segunda-Feira, 31/03/2024",
    },
    {
      title: "Resumo do Dia",
      description: "12 atividades",
    },
    {
      title: "Próxima Atividade",
      description: "10h - Sessão de fisioterapia",
    },
    isAdmin
      ? {
          title: "Progresso Recente",
          description: "4/5 atividades concluídas",
        }
      : {
          title: "Próximo Lembrete",
          description: "09h - Preparar para a sessão de fisio",
        },
  ];

  const quickAccessItems = isAdmin
    ? [
        { title: "Atividades da Ana", link: "/rotina" },
        { title: "Relatórios", link: "/relatorios" },
        { title: "Nova Atividade", link: "/atividades" },
      ]
    : [
        { title: "Minhas atividades", link: "/rotina" },
        { title: "Nova Atividade", link: "/atividades" },
        { title: "Acessibilidade", link: "/acessibilidade" },
      ];

  return (
    <PageLayout
      isAdmin={isAdmin}
      title={`👋 Olá, ${userName}!`}
      subtitle={subtitleText}
    >
      <Box
        sx={{
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          gap: 7,
          width: "100%",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            flex: "1 1 60%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {cardData.map((card) => (
            <CustomCardHome
              key={card.title}
              title={card.title}
              description={card.description}
            />
          ))}
        </Box>

        <Box
          sx={{
            flex: "1 1 35%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
          }}
        >
          <SubtitleSm>Acesso rápido</SubtitleSm>
          <CustomMenuHome items={quickAccessItems} />
        </Box>
      </Box>
    </PageLayout>
  );
}
