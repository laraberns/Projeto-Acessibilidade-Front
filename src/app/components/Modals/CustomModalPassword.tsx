import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CustomTextField from "../Form/CustomTextField";
import EmailIcon from "@mui/icons-material/Email";
import CustomButton from "../Form/CustomButton";
import { whiteColor } from "../../styles/colors";
import TitleSm from "../Typography/TitleSm";
import ParagraphSm from "../Typography/ParagraphSm";
import { toast } from "react-toastify";

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
}

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: whiteColor.whiteColorBase,
  borderRadius: "8px",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  maxWidth: 700,
  gap: 3,
  alignItems: "center",
  p: 8,
  width: "80%",
  textAlign: "center",
};

export default function CustomModalPassword({
  open,
  onClose,
}: CustomModalProps) {
  const handleSendEmail = () => {
    toast.success("Email enviado com sucesso! Confira sua caixa de entrada.");
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ ...style, position: "relative" }}>
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

        <TitleSm>Esqueceu a sua senha?</TitleSm>
        <ParagraphSm>
          Não se preocupe, enviaremos uma mensagem para ajudar você a redefinir
          sua senha.
        </ParagraphSm>
        <CustomTextField
          label="Email"
          placeholder="ana@email.com"
          icon={<EmailIcon />}
        />
        <CustomButton label="Enviar" onClick={handleSendEmail} />
      </Box>
    </Modal>
  );
}
