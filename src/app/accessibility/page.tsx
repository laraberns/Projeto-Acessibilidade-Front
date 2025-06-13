"use client";

import { Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import PageLayout from "../components/Layouts/PageLayout";
import CustomSelectField from "../components/Form/CustomSelectField";
import CustomCheckbox from "../components/Form/CustomCheckbox";
import CustomButton from "../components/Form/CustomButton";
import Paragraph from "../components/Typography/Paragraph";
import CustomSlider from "../components/Form/CustomSlider";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const marks = [
  { value: 0, label: "Pequeno" },
  { value: 1, label: "Médio" },
  { value: 2, label: "Grande" },
  { value: 3, label: "Muito Grande" },
];

export default function Accessibility() {
  const [colorMode, setColorMode] = useState("Padrão");
  const [fontSize, setFontSize] = useState(1);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth") || "{}");
    if (!auth.isLoggedIn) {
      router.push("/login");
    } else if (auth.isAdmin) {
      router.push("/home");
    } else {
      setIsAdmin(false);
    }
  }, [router]);

  const [soundAlerts, setSoundAlerts] = useState({
    reminders: true,
    nearActivity: true,
    repeatIfNoInteraction: true,
  });

  const [screenReader, setScreenReader] = useState({
    readNotifications: false,
    readActivityName: false,
    repeatIfNoInteraction: false,
  });

  const handleSave = () => {
    toast.success("Configurações salvas com sucesso!");
  };

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
      isAdmin={false}
      title="Acessibilidade"
      subtitle="Personalize como deseja receber lembretes e interações sonoras"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: 4,
          my: 4,
        }}
      >
        <Box sx={{ maxWidth: "600px", width: "100%" }}>
          <CustomSlider
            label="Tamanho do Texto:"
            value={fontSize}
            onChange={setFontSize}
            marks={marks}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
          }}
        >
          <Paragraph>Modo de cor:</Paragraph>
          <Box sx={{ maxWidth: "600px" }}>
            <CustomSelectField
              label="Modo de cor"
              options={[
                { label: "Padrão", value: "Padrão" },
                { label: "Alto contraste", value: "Alto contraste" },
                { label: "Escuro", value: "Escuro" },
              ]}
              value={colorMode}
              onChange={(e) => setColorMode(e.target.value)}
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Paragraph>Alertas Sonoros:</Paragraph>

          <CustomCheckbox
            label="Ativar som em lembretes"
            checked={soundAlerts.reminders}
            onChange={(e) =>
              setSoundAlerts({ ...soundAlerts, reminders: e.target.checked })
            }
          />
          <CustomCheckbox
            label="Tocar som quando atividade estiver próxima"
            checked={soundAlerts.nearActivity}
            onChange={(e) =>
              setSoundAlerts({ ...soundAlerts, nearActivity: e.target.checked })
            }
          />
          <CustomCheckbox
            label="Repetir som caso não interaja"
            checked={soundAlerts.repeatIfNoInteraction}
            onChange={(e) =>
              setSoundAlerts({
                ...soundAlerts,
                repeatIfNoInteraction: e.target.checked,
              })
            }
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Paragraph>Leitura de Tela:</Paragraph>

          <CustomCheckbox
            label="Ativar leitura de notificações"
            checked={screenReader.readNotifications}
            onChange={(e) =>
              setScreenReader({
                ...screenReader,
                readNotifications: e.target.checked,
              })
            }
          />
          <CustomCheckbox
            label="Ler o nome da atividade em voz alta"
            checked={screenReader.readActivityName}
            onChange={(e) =>
              setScreenReader({
                ...screenReader,
                readActivityName: e.target.checked,
              })
            }
          />
          <CustomCheckbox
            label="Repetir som caso não interaja"
            checked={screenReader.repeatIfNoInteraction}
            onChange={(e) =>
              setScreenReader({
                ...screenReader,
                repeatIfNoInteraction: e.target.checked,
              })
            }
          />
        </Box>
        <Box sx={{ maxWidth: "300px", width: "100%" }}>
          <CustomButton label="Salvar Preferências" onClick={handleSave} />
        </Box>
      </Box>
    </PageLayout>
  );
}
