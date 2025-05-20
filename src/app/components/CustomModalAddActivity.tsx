import { Modal, Box, IconButton, SelectChangeEvent } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CustomTextField from "./CustomTextField";
import CustomButton from "./CustomButton";
import { toast } from "react-toastify";
import { useState } from "react";
import { whiteColor } from "../styles/colors";
import SubtitleSm from "./Typography/SubtitleSm";
import CustomDatePicker from "./CustomDatePicker";
import CustomTimePicker from "./CustomTimePicker";
import CustomCheckbox from "./CustomCheckbox";
import CustomSelectField from "./CustomSelectField";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

interface ActivityData {
  title: string;
  date: string;
  hour: string;
  description?: string;
  state?: "active" | "done";
}

interface CustomModalAddActivityProps {
  open: boolean;
  onClose: () => void;
  onSave: (activity: ActivityData) => void;
}

const modalStyle = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: whiteColor.whiteColorBase,
  borderRadius: "8px",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  gap: 3,
  alignItems: "center",
  px: 3,
  py: 6,
  width: "80%",
  maxWidth: 500,
};

export default function CustomModalAddActivity({
  open,
  onClose,
  onSave,
}: CustomModalAddActivityProps) {
  const [activityName, setActivityName] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [description, setDescription] = useState("");
  const [reminderTime, setReminderTime] = useState("10");
  const [isReminderEnabled, setIsReminderEnabled] = useState(true);
  const [isRepetitionEnabled, setIsRepetitionEnabled] = useState(false);
  const [repetitionType, setRepetitionType] = useState("weekly");

  const [startTime, setStartTime] = useState<Date | null>(() => {
    const date = new Date();
    date.setHours(9);
    date.setMinutes(0);
    return date;
  });

  const [endTime, setEndTime] = useState<Date | null>(() => {
    const date = new Date();
    date.setHours(10);
    date.setMinutes(0);
    return date;
  });

  const handleSave = () => {
    if (!activityName.trim()) {
      toast.error("Por favor, preencha o nome da atividade.");
      return;
    }
  
    if (!selectedDate || !startTime || !endTime) {
      toast.error("Data e horários devem estar preenchidos.");
      return;
    }
  
    const formatDate = (date: Date) => {
      return date.toISOString().split("T")[0]; // yyyy-mm-dd
    };
  
    const formatHourRange = (start: Date, end: Date) => {
      const formatTime = (d: Date) =>
        d.toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });
      return `${formatTime(start)} - ${formatTime(end)}`;
    };
  
    const newActivity: ActivityData = {
      title: activityName,
      date: formatDate(selectedDate),
      hour: formatHourRange(startTime, endTime),
      description,
      state: "active",
    };    
    
    onSave(newActivity);
    toast.success("Atividade adicionada com sucesso!");
    setActivityName("");
    onClose();
  };
  

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ ...modalStyle, position: "relative" }}>
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "#999",
          }}
          aria-label="Fechar"
        >
          <CloseIcon />
        </IconButton>

        <SubtitleSm fontWeight={600}>Adicionar nova atividade</SubtitleSm>

        <CustomTextField
          label="Nome da atividade"
          placeholder="Ex: Sessão de terapia"
          value={activityName}
          onChange={(e) => setActivityName(e.target.value)}
        />

        <CustomDatePicker
          label="Data da Atividade"
          value={selectedDate}
          onChange={setSelectedDate}
        />

        <CustomTimePicker
          label="Horário de Início"
          value={startTime}
          onChange={setStartTime}
        />

        <CustomTimePicker
          label="Horário de Término"
          value={endTime}
          onChange={setEndTime}
        />

        <CustomTextField
          label="Descrição"
          required={false}
          placeholder="Ex: Devo levar minhas chaves"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <CustomCheckbox
          label="Ativar lembrete?"
          defaultChecked={isReminderEnabled}
          onChange={(e) => setIsReminderEnabled(e.target.checked)}
        />

        {isReminderEnabled && (
          <CustomSelectField
            label="Tempo do lembrete"
            icon={<CalendarMonthIcon sx={{ mr: 1 }} />}
            options={[
              { label: "5 minutos antes", value: "5" },
              { label: "10 minutos antes", value: "10" },
              { label: "30 minutos antes", value: "30" },
              { label: "1 hora antes", value: "60" },
            ]}
            value={reminderTime}
            onChange={(event: SelectChangeEvent) => {
              setReminderTime(event.target.value);
            }}
          />
        )}

        <CustomCheckbox
          label="Repetir?"
          defaultChecked={isRepetitionEnabled}
          onChange={(e) => setIsRepetitionEnabled(e.target.checked)}
        />

        {isRepetitionEnabled && (
          <CustomSelectField
            label="Frequência"
            icon={<CalendarMonthIcon sx={{ mr: 1 }} />}
            options={[
              { label: "Toda semana", value: "weekly" },
              { label: "A cada 15 dias", value: "biweekly" },
              { label: "Todo mês", value: "monthly" },
              { label: "Todo ano", value: "yearly" },
            ]}
            value={repetitionType}
            onChange={(event: SelectChangeEvent) => {
              setRepetitionType(event.target.value);
            }}
          />
        )}

        <Box sx={{display: "flex", alignItems: "center", gap: 2, minWidth: "80%"}}>
          <CustomButton label="Cancelar" onClick={onClose} variant="cancel" />
          <CustomButton label="Salvar atividade" onClick={handleSave} />
        </Box>
      </Box>
    </Modal>
  );
}
