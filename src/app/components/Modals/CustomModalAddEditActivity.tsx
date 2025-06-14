import { Modal, Box, IconButton, SelectChangeEvent } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { whiteColor } from "../../styles/colors";
import SubtitleSm from "../Typography/SubtitleSm";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CustomTextField from "../Form/CustomTextField";
import CustomDatePicker from "../Form/CustomDatePicker";
import CustomTimePicker from "../Form/CustomTimePicker";
import CustomCheckbox from "../Form/CustomCheckbox";
import CustomSelectField from "../Form/CustomSelectField";
import CustomButton from "../Form/CustomButton";
import { ICustomModalAddEditActivities } from "@/app/interfaces/ICustomModalAddEditActivities";
import { IActivity } from "@/app/interfaces/IActivity";

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

export default function CustomModalAddEditActivity({
  open,
  onClose,
  onSave,
  activityToEdit,
}: ICustomModalAddEditActivities) {
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

  const [errorActivityName, setErrorActivityName] = useState(false);
  const [errorDate, setErrorDate] = useState(false);
  const [errorHour, setErrorHour] = useState(false);

  useEffect(() => {
    if (activityToEdit) {
      setActivityName(activityToEdit.title);
      setDescription(activityToEdit.description || "");

      const dateParts = activityToEdit.date.split("-");
      const startDate = new Date(
        Number(dateParts[0]),
        Number(dateParts[1]) - 1,
        Number(dateParts[2])
      );

      setSelectedDate(startDate);

      const [startHour, endHour] = activityToEdit.hour.split(" - ");
      const [startH, startM] = startHour.split(":").map(Number);
      const [endH, endM] = endHour.split(":").map(Number);

      const start = new Date(startDate);
      start.setHours(startH, startM);
      const end = new Date(startDate);
      end.setHours(endH, endM);

      setStartTime(start);
      setEndTime(end);
    } else {
      setActivityName("");
      setDescription("");
      setSelectedDate(new Date());
      const start = new Date();
      start.setHours(9, 0);
      const end = new Date();
      end.setHours(10, 0);
      setStartTime(start);
      setEndTime(end);
    }

    setErrorActivityName(false);
    setErrorDate(false);
    setErrorHour(false);
  }, [activityToEdit, open]);

  const handleSave = () => {
    let hasError = false;

    if (!activityName.trim()) {
      setErrorActivityName(true);
      hasError = true;
    } else {
      setErrorActivityName(false);
    }

    if (!selectedDate) {
      setErrorDate(true);
      hasError = true;
    } else {
      setErrorDate(false);
    }

    if (!startTime || !endTime || endTime <= startTime) {
      setErrorHour(true);
      hasError = true;
    } else {
      setErrorHour(false);
    }

    if (hasError) return;

    const formatDate = (date: Date) => {
      return date.toISOString().split("T")[0];
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

    const newActivity: IActivity = {
      title: activityName,
      date: formatDate(selectedDate!),
      hour: formatHourRange(startTime!, endTime!),
      description,
      state: "active",
    };

    onSave(newActivity);
    toast.success(
      activityToEdit
        ? "Atividade editada com sucesso!"
        : "Atividade adicionada com sucesso!"
    );
    setActivityName("");
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ ...modalStyle, position: "relative" }}>
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 8, right: 8, color: "#999" }}
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
          error={errorActivityName}
          helperText={errorActivityName ? "Preencha o nome da atividade" : ""}
        />

        <CustomDatePicker
          label="Data da Atividade"
          value={selectedDate}
          onChange={setSelectedDate}
          error={errorDate}
          helperText={errorDate ? "Selecione uma data" : ""}
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
          error={errorHour}
          helperText={errorHour ? "Horário inválido" : ""}
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

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            minWidth: "80%",
          }}
        >
          <CustomButton label="Cancelar" onClick={onClose} variant="cancel" />
          <CustomButton label="Salvar atividade" onClick={handleSave} />
        </Box>
      </Box>
    </Modal>
  );
}
