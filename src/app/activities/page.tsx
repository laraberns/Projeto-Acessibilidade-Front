"use client";

import {
  Box,
  CircularProgress,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CustomModalCheckActivity from "../components/Modals/CustomModalCheckActivity";
import CustomModalDeleteActivity from "../components/Modals/CustomModalDeleteActivity";
import PageLayout from "../components/Layouts/PageLayout";
import CustomSelectField from "../components/Form/CustomSelectField";
import CustomCardActivity from "../components/Cards/CustomCardActivity";
import CustomButton from "../components/Form/CustomButton";
import CustomModalAddEditActivity from "../components/Modals/CustomModalAddEditActivity";
import { useRouter } from "next/navigation";
import {
  isWithinInterval,
  parseISO,
  addWeeks,
  addMonths,
  startOfWeek,
} from "date-fns";
import Paragraph from "../components/Typography/Paragraph";
import { IActivity } from "../interfaces/IActivity";

function formatDateToLong(dateString: string) {
  const [year, month, day] = dateString.split("-").map(Number);
  const localDate = new Date(year, month - 1, day);
  return new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
  }).format(localDate);
}

const title = "Minhas Atividades";

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
  const [checkModalOpen, setCheckModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [activityToDelete, setActivityToDelete] = useState<{
    title: string;
    hour: string;
  } | null>(null);

  const [selectedActivity, setSelectedActivity] = useState<{
    title: string;
    hour: string;
    currentState: "active" | "done";
  } | null>(null);

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [activityToEdit, setActivityToEdit] = useState<IActivity | null>(null);

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

  const subtitleText = isAdmin
    ? "Visualize e acompanhe suas atividades da rotina da Ana"
    : "Visualize e acompanhe suas atividades da sua rotina";

  const handleOpenEditModal = (activity: IActivity) => {
    setActivityToEdit(activity);
    setEditModalOpen(true);
  };

  const handleUpdateActivity = (updated: IActivity) => {
    setActivities((prev) =>
      prev.map((activity) =>
        activity.title === activityToEdit?.title &&
        activity.hour === activityToEdit?.hour
          ? { ...updated }
          : activity
      )
    );
    setEditModalOpen(false);
    setActivityToEdit(null);
  };

  const handleOpenCheckModal = (
    currentState: "active" | "done",
    title: string,
    hour: string
  ) => {
    setSelectedActivity({ title, hour, currentState });
    setCheckModalOpen(true);
  };

  const toggleActivityState = (
    title: string,
    hour: string,
    newState: "active" | "done"
  ) => {
    setActivities((prev) =>
      prev.map((activity) =>
        activity.title === title && activity.hour === hour
          ? { ...activity, state: newState }
          : activity
      )
    );
  };

  const handleCompleteActivity = () => {
    if (selectedActivity) {
      const newState =
        selectedActivity.currentState === "done" ? "active" : "done";
      toggleActivityState(
        selectedActivity.title,
        selectedActivity.hour,
        newState
      );
      toast.success(
        `Atividade marcada como ${
          newState === "done" ? "concluída" : "pendente"
        }!`
      );
    }
    setCheckModalOpen(false);
  };

  const handleDateRangeChange = (event: SelectChangeEvent) => {
    setDateRange(event.target.value);
  };

  const handleOpenDeleteModal = (title: string, hour: string) => {
    setActivityToDelete({ title, hour });
    setDeleteModalOpen(true);
  };

  const filteredActivities = filterActivitiesByDateRange(activities, dateRange);

  const groupedByDate: Record<string, typeof filteredActivities> = {};
  filteredActivities.forEach((item) => {
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

  const handleDeleteActivity = () => {
    if (activityToDelete) {
      setActivities((prev) =>
        prev.filter(
          (activity) =>
            activity.title !== activityToDelete.title ||
            activity.hour !== activityToDelete.hour
        )
      );
      toast.success("Atividade deletada com sucesso!");
      setDeleteModalOpen(false);
    }
  };

  function filterActivitiesByDateRange(
    activities: typeof cardData,
    range: string
  ) {
    const today = new Date();
    const start = startOfWeek(today, { weekStartsOn: 1 });
    let end: Date;

    switch (range) {
      case "2weeks":
        end = addWeeks(start, 2);
        break;
      case "month":
        end = addMonths(start, 1);
        break;
      case "all":
        return activities;
      case "week":
      default:
        end = addWeeks(start, 1);
    }

    return activities.filter((activity) =>
      isWithinInterval(parseISO(activity.date), { start, end })
    );
  }

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
    <PageLayout isAdmin={isAdmin} title={title} subtitle={subtitleText}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Box sx={{ maxWidth: "350px", width: "100%", mt: 2 }}>
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

        {sortedDates.length === 0 ? (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              my: 3,
            }}
          >
            <Paragraph>
              Nenhuma atividade encontrada para o período selecionado.
            </Paragraph>
          </Box>
        ) : (
          sortedDates.map((date) => (
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
                  state={card.state ?? "active"}
                  onEdit={() => handleOpenEditModal(card)}
                  onDelete={() => handleOpenDeleteModal(card.title, card.hour)}
                  onRequestToggleComplete={(currentState, title, hour) =>
                    handleOpenCheckModal(currentState, title, hour)
                  }
                />
              ))}
            </Box>
          ))
        )}
      </Box>
      <Box sx={{ maxWidth: 300 }}>
        <CustomButton
          label="+ Adicionar Atividade"
          onClick={() => setAddModalOpen(true)}
        />
      </Box>
      <CustomModalAddEditActivity
        open={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        onSave={handleSaveNewActivity}
      />

      {editModalOpen && activityToEdit && (
        <CustomModalAddEditActivity
          open={editModalOpen}
          onClose={() => {
            setEditModalOpen(false);
            setActivityToEdit(null);
          }}
          onSave={handleUpdateActivity}
          activityToEdit={activityToEdit}
        />
      )}

      {selectedActivity && (
        <CustomModalCheckActivity
          open={checkModalOpen}
          onClose={() => setCheckModalOpen(false)}
          onSave={handleCompleteActivity}
          activity={selectedActivity}
        />
      )}
      {activityToDelete && (
        <CustomModalDeleteActivity
          open={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          onDelete={handleDeleteActivity}
          activity={activityToDelete}
        />
      )}
    </PageLayout>
  );
}
