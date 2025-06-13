"use client";

import { Box, CircularProgress } from "@mui/material";
import PageLayout from "../components/Layouts/PageLayout";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { countries } from "../data/countries";
import { states } from "../data/states";
import { genders } from "../data/genders";
import CustomTextField from "../components/Form/CustomTextField";
import CustomSelectField from "../components/Form/CustomSelectField";
import CustomDatePicker from "../components/Form/CustomDatePicker";
import CustomButton from "../components/Form/CustomButton";
import { toast } from "react-toastify";
import { Avatar, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function Profile() {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  // Estado com dados pré-preenchidos e dataNascimento como Date | null
  const [formData, setFormData] = useState({
    nome: "Ana Maria",
    email: "ana.maria@email.com",
    celular: "(11) 91234-5678",
    pais: "BR",
    estado: "SP",
    cidade: "São Paulo",
    dataNascimento: new Date("1990-05-15"),
    genero: "female",
  });
  const [avatar, setAvatar] = useState<string | null>(null);

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth") || "{}");
    if (!auth.isLoggedIn) {
      router.push("/login");
    } else {
      setIsAdmin(auth.isAdmin === true);
      setLoading(false);
    }
  }, [router]);

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    toast.success("Perfil salvo com sucesso!");
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  if (loading || isAdmin === null) {
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
      isAdmin={isAdmin}
      title="Meu Perfil"
      subtitle="Atualize suas informações pessoais"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          my: 4,
          position: "relative",
          width: 150,
          height: 150,
          mx: "auto",
        }}
      >
        <Avatar
          src={avatar || undefined}
          sx={{ width: 150, height: 150, bgcolor: "grey.300", fontSize: 56 }}
        >
          {!avatar && formData.nome.charAt(0)}
        </Avatar>
        <input
          type="file"
          accept="image/*"
          id="avatar-upload"
          style={{ display: "none" }}
          onChange={handleAvatarChange}
        />
        <IconButton
          color="primary"
          component="label"
          htmlFor="avatar-upload"
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            bgcolor: "background.paper",
            border: "1px solid",
            borderColor: "grey.400",
            "&:hover": { bgcolor: "background.paper" },
          }}
          aria-label="Editar avatar"
        >
          <EditIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 1,
        }}
      >
        {/* Coluna 1 */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 3 }}>
          <CustomTextField
            label="Nome"
            value={formData.nome}
            onChange={(e) => handleChange("nome", e.target.value)}
          />
          <CustomTextField
            label="Celular"
            value={formData.celular}
            onChange={(e) => handleChange("celular", e.target.value)}
          />
          <CustomSelectField
            label="Estado"
            value={formData.estado}
            onChange={(e) => handleChange("estado", e.target.value)}
            options={formData.pais === "BR" ? states : []}
            disabled={!formData.pais}
          />
          <CustomDatePicker
            label="Data de Nascimento"
            value={formData.dataNascimento}
            onChange={(newValue) => handleChange("dataNascimento", newValue)}
            required={false}
          />
        </Box>

        {/* Coluna 2 */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 3 }}>
          <CustomTextField
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <CustomSelectField
            label="País"
            value={formData.pais}
            onChange={(e) => handleChange("pais", e.target.value)}
            options={countries}
          />
          <CustomTextField
            label="Cidade"
            value={formData.cidade}
            onChange={(e) => handleChange("cidade", e.target.value)}
          />
          <CustomSelectField
            label="Gênero"
            value={formData.genero}
            onChange={(e) => handleChange("genero", e.target.value)}
            options={genders}
          />
        </Box>
      </Box>
      <Box sx={{ mt: 3, display: "flex", maxWidth: "300px" }}>
        <CustomButton label="Salvar" onClick={handleSave} />
      </Box>
    </PageLayout>
  );
}
