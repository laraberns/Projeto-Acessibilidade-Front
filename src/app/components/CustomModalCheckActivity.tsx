import {
  Modal,
  Box,
  IconButton,
  Typography,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CustomButton from "./CustomButton";
import { blackColor, greenColor, whiteColor } from "../styles/colors";
import Paragraph from "./Typography/Paragraph";
import CustomDivider from "./Divider";

const modalStyle = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: whiteColor.whiteColorBase,
  borderRadius: "8px",
  boxShadow: 24,
  width: "80%",
  maxWidth: 500,
};

interface CustomModalCheckActivityProps {
  open: boolean;
  onClose: () => void;
  onSave: () => void;
  activity: {
    title: string;
    hour: string;
    currentState: "active" | "done";
  };
}

export default function CustomModalCheckActivity({
  open,
  onClose,
  onSave,
  activity,
}: CustomModalCheckActivityProps) {
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

        <Box
          sx={{
            px: 4,
            pt: 4,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <InfoOutlinedIcon
              sx={{ fontSize: 24, color: blackColor.blackColorBase }}
            />
            <Typography
              sx={{
                fontSize: "23px",
                fontWeight: 500,
                color: blackColor.blackColorBase,
                lineHeight: "24px",
              }}
            >
              Marcar atividade como
              {activity.currentState === "done" ? " pendente" : " concluída"}
            </Typography>
          </Stack>
        </Box>

        <CustomDivider />

        <Box
          sx={{
            px: 4,
            pt: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Paragraph fontWeight={300}>Resumo da Atividade:</Paragraph>

          <Box sx={{ display: "flex", flexDirection: "column", my: 2 }}>
            <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
              Nome: {activity.title}
            </Typography>

            <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
              Horário: {activity.hour}
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: "23px",
              fontWeight: 500,
              color: greenColor.greenColorBase,
              lineHeight: "24px",
              textAlign: "center",
            }}
          >
            Deseja {activity.currentState === "done" ? "desmarcar" : "marcar"}{" "}
            esta atividade como{" "}
            {activity.currentState === "done" ? "pendente" : "concluída"}?
          </Typography>
        </Box>

        <CustomDivider />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            minWidth: "80%",
            px: 4,
            pb: 2,
          }}
        >
          <CustomButton label="Cancelar" onClick={onClose} variant="cancel" />
          <CustomButton label="Sim, concluir" onClick={onSave} />
        </Box>
      </Box>
    </Modal>
  );
}
