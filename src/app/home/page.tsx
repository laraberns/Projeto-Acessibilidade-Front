"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, CircularProgress } from "@mui/material";
import SubtitleSm from "../components/Typography/SubtitleSm";
import PageLayout from "../components/Layouts/PageLayout";
import CustomCardHome from "../components/Cards/CustomCardHome";
import CustomMenuHome from "../components/Menu/CustomMenuHome";

export default function Home() {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  // HARD-CODED
  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth") || "{}");
    if (!auth.isLoggedIn) {
      router.push("/login");
    } else {
      setIsAdmin(auth.isAdmin === true);
    }
  }, [router]);

  if (isAdmin === null) {
    return (
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

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
