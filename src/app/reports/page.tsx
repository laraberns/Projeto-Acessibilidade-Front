"use client";

import { Box, CircularProgress } from "@mui/material";
import PageLayout from "../components/Layouts/PageLayout";
import CustomDatePicker from "../components/Form/CustomDatePicker";
import { useEffect, useState } from "react";
import CustomButton from "../components/Form/CustomButton";
import CustomTableSection from "../components/CustomTableSection";
import ParagraphSm from "../components/Typography/ParagraphSm";
import { useRouter } from "next/navigation";

export default function Reports() {
  const [initialSelectedDate, setInitialSelectedDate] = useState<Date | null>(
    new Date()
  );
  const [finalSelectedDate, setFinalSelectedDate] = useState<Date | null>(
    new Date()
  );
  const [showReport, setShowReport] = useState<boolean>(false);
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth") || "{}");
    if (!auth.isLoggedIn) {
      router.push("/login");
    } else if (!auth.isAdmin) {
      router.push("/home");
    } else {
      setIsAdmin(true);
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

  return (
    <PageLayout
      isAdmin={true}
      title={"Relatórios de Progresso"}
      subtitle={"Veja como Ana tem cumprido suas atividades"}
    >
      <Box sx={{ textAlign: "center", my: 2 }}>
        <ParagraphSm> Filtrar por período:</ParagraphSm>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          width: "60%",
          margin: "0 auto",
        }}
      >
        <CustomDatePicker
          label="Selecione uma data inicial"
          value={initialSelectedDate}
          onChange={setInitialSelectedDate}
        />

        <CustomDatePicker
          label="Selecione uma data final"
          value={finalSelectedDate}
          onChange={setFinalSelectedDate}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          maxWidth: "300px",
          width: "100%",
          margin: "0 auto",
          mt: 2,
          justifyContent: "center",
        }}
      >
        <CustomButton
          label="Gerar relatório"
          onClick={() => setShowReport(true)}
        />
      </Box>

      {showReport && (
        <>
          <CustomTableSection
            title="Resumo geral:"
            headers={["Indicador", "Desempenho"]}
            rows={[
              ["Atividades agendadas", 12],
              ["Atividades concluídas", 10],
              ["Taxa de adesão", "83%"],
            ]}
          />

          <CustomTableSection
            title="Lista detalhada de atividades:"
            headers={["Data", "Atividade", "Status"]}
            rows={[["25/03/2025", "Sessão de Leitura", "Concluída"]]}
          />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              maxWidth: "300px",
              width: "100%",
              margin: "0 auto",
              mt: 2,
              justifyContent: "center",
            }}
          >
            <CustomButton
              label="Exportar Relatório (PDF)"
              onClick={() =>
                alert(
                  "A exportação de relatório estará disponível após integração com o servidor."
                )
              }
            />
          </Box>
        </>
      )}
    </PageLayout>
  );
}
