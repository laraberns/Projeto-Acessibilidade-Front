import { Modal, Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CustomButton from "../Form/CustomButton";
import { blackColor, redColor, whiteColor } from "../../styles/colors";
import Paragraph from "../Typography/Paragraph";
import CustomDivider from "../Divider";

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

interface CustomModalDeleteActivityProps {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
  activity: {
    title: string;
    hour: string;
  };
}

export default function CustomModalDeleteActivity({
  open,
  onClose,
  onDelete,
  activity,
}: CustomModalDeleteActivityProps) {
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
          <Typography
            sx={{
              fontSize: "23px",
              fontWeight: 500,
              color: blackColor.blackColorBase,
              lineHeight: "24px",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <DeleteOutlineIcon sx={{ fontSize: 26 }} />
            Confirmar exclusão da atividade?
          </Typography>
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
              fontSize: "20px",
              fontWeight: 500,
              color: redColor.redColorBase,
              textAlign: "center",
              my: 2,
            }}
          >
            Esta ação não poderá ser desfeita.
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
          <CustomButton
            label="Sim, excluir"
            onClick={onDelete}
            variant="danger"
          />
        </Box>
      </Box>
    </Modal>
  );
}
