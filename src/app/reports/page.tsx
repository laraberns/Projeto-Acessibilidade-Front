"use client";

import { Box } from "@mui/material";
import PageLayout from "../components/Layouts/PageLayout";
import CustomDatePicker from "../components/Form/CustomDatePicker";
import { useState } from "react";
import CustomButton from "../components/Form/CustomButton";
import CustomTableSection from "../components/CustomTableSection";
import ParagraphSm from "../components/Typography/ParagraphSm";

export default function Reports() {
  const [initialSelectedDate, setInitialSelectedDate] = useState<Date | null>(
    new Date()
  );
  const [finalSelectedDate, setFinalSelectedDate] = useState<Date | null>(
    new Date()
  );
  const [showReport, setShowReport] = useState<boolean>(false);

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
              onClick={() => console.log("oi")}
            />
          </Box>
        </>
      )}
    </PageLayout>
  );
}
