"use client";

import { Box, SelectChangeEvent, Typography } from "@mui/material";
import PageLayout from "../components/PageLayout";
import CustomCardActivity from "../components/CustomCardActivity";
import CustomButton from "../components/CustomButton";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useState } from "react";
import CustomSelectField from "../components/CustomSelectField";
import CustomModalAddActivity from "../components/CustomModalAddActivity";

function formatDateToLong(dateString: string) {
  const [year, month, day] = dateString.split("-").map(Number);
  const localDate = new Date(year, month - 1, day);
  return new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
  }).format(localDate);
}

const isAdmin = false;
const title = "Minhas Atividades";
const subtitleText = isAdmin
  ? "Visualize e acompanhe suas atividades da rotina da Ana"
  : "Visualize e acompanhe suas atividades da sua rotina";

const cardData = [
  {
    title: "Consulta Médica",
    date: "2024-03-31",
    hour: "09:00 - 10:00",
    state: "done",
  },
  {
    title: "Fisioterapia",
    date: "2024-03-31",
    hour: "10:30 - 11:30",
    state: "active",
  },
  {
    title: "Terapia Ocupacional",
    date: "2024-04-01",
    hour: "14:00 - 15:00",
    state: "active",
  },
];

export default function Activities() {
  const [dateRange, setDateRange] = useState("week");
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [activities, setActivities] = useState(cardData);

  const handleDateRangeChange = (event: SelectChangeEvent) => {
    setDateRange(event.target.value);
  };

  const groupedByDate: Record<string, typeof activities> = {};
  activities.forEach((item) => {
    if (!groupedByDate[item.date]) {
      groupedByDate[item.date] = [];
    }
    groupedByDate[item.date].push(item);
  });
  
  const sortedDates = Object.keys(groupedByDate).sort();

  const handleSaveNewActivity = (activity: {
    title: string;
    date: string;
    hour: string;
    state?: "active" | "done";
  }) => {
    setActivities((prev) => [...prev, { ...activity, state: "active" }]);
    setAddModalOpen(false);
  };
  
  return (
    <PageLayout isAdmin={isAdmin} title={title} subtitle={subtitleText}>
      <Box
        sx={{
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          width: "100%",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            maxWidth: "350px",
            width: "100%",
            mt: 2,
          }}
        >
          <CustomSelectField
            label="Período"
            icon={<CalendarMonthIcon sx={{ mr: 1 }} />}
            options={[
              { label: "Semana Atual", value: "week" },
              { label: "Próximas 2 Semanas", value: "2weeks" },
              { label: "Próximo Mês", value: "month" },
              { label: "Todos", value: "all" },
            ]}
            value={dateRange}
            onChange={handleDateRangeChange}
          />
        </Box>

        <Box
          sx={{
            flex: "1 1 60%",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {sortedDates.map((date) => (
            <Box
              key={date}
              sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
            >
              <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
                {formatDateToLong(date)}
              </Typography>

              {groupedByDate[date].map((card) => (
                <CustomCardActivity
                  key={card.title + card.hour}
                  title={card.title}
                  hour={card.hour}
                  state={card.state}
                  onEdit={() => {}}
                  onDelete={() => {}}
                  onComplete={() => {}}
                />
              ))}
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ maxWidth: 300 }}>
        <CustomButton
          label="+ Adicionar Atividade"
          onClick={() => setAddModalOpen(true)}
        />
      </Box>
      <CustomModalAddActivity
        open={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        onSave={handleSaveNewActivity}
      />
    </PageLayout>
  );
}
