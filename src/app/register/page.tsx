"use client";

import { useEffect, useState } from "react";
import { Box, CircularProgress, Alert } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import AuthPageLayout from "@/app/components/Layouts/AuthPageLayout";
import TitleSm from "@/app/components/Typography/TitleSm";
import ParagraphSm from "@/app/components/Typography/ParagraphSm";
import Paragraph from "@/app/components/Typography/Paragraph";
import CustomDivider from "@/app/components/Divider";
import CustomSelectField from "../components/Form/CustomSelectField";
import CustomTextField from "../components/Form/CustomTextField";
import CustomButton from "../components/Form/CustomButton";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Register() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [profileType, setProfileType] = useState("responsable");
  const [degreeOfKinship, setDegreeOfKinship] = useState("child");
  const [accessSelector, setAccessSelector] = useState("password");
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [formErrors, setFormErrors] = useState<string[]>([]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    dependentName: "",
    dependentEmail: "",
    dependentPhone: "",
    responsibleName: "",
    responsiblePhone: "",
    responsibleEmail: "",
    dependentPassword: "",
    dependentConfirmPassword: "",
  });

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidPhone = (phone: string) =>
    /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/.test(phone);

  const validateStep1 = () => {
    const errors: string[] = [];

    if (!formData.fullName.trim())
      errors.push("O nome completo é obrigatório.");

    if (!formData.email.trim()) {
      errors.push("O e-mail é obrigatório.");
    } else if (!isValidEmail(formData.email)) {
      errors.push("O e-mail informado é inválido.");
    }

    if (!formData.phone.trim()) {
      errors.push("O telefone é obrigatório.");
    } else if (!isValidPhone(formData.phone)) {
      errors.push("O telefone informado é inválido.");
    }

    if (!formData.password || formData.password.length < 4) {
      errors.push("A senha deve ter pelo menos 4 caracteres.");
    }

    if (formData.password !== formData.confirmPassword) {
      errors.push("As senhas não coincidem.");
    }

    setFormErrors(errors);
    return errors.length === 0;
  };

  const validateStep2 = () => {
    const errors: string[] = [];

    if (profileType === "responsable") {
      if (!formData.dependentName?.trim())
        errors.push("O nome da pessoa acompanhada é obrigatório.");

      if (!formData.dependentEmail?.trim()) {
        errors.push("O e-mail da pessoa acompanhada é obrigatório.");
      } else if (!isValidEmail(formData.dependentEmail)) {
        errors.push("O e-mail da pessoa acompanhada é inválido.");
      }

      if (!formData.dependentPhone?.trim()) {
        errors.push("O telefone da pessoa acompanhada é obrigatório.");
      } else if (!isValidPhone(formData.dependentPhone)) {
        errors.push("O telefone da pessoa acompanhada é inválido.");
      }

      if (accessSelector === "password") {
        if (
          !formData.dependentPassword ||
          formData.dependentPassword.length < 4
        ) {
          errors.push(
            "A senha da pessoa acompanhada deve ter pelo menos 4 caracteres."
          );
        }

        if (formData.dependentPassword !== formData.dependentConfirmPassword) {
          errors.push("As senhas da pessoa acompanhada não coincidem.");
        }
      }
    } else {
      if (!formData.responsibleName?.trim())
        errors.push("O nome do responsável é obrigatório.");

      if (!formData.responsiblePhone?.trim()) {
        errors.push("O telefone do responsável é obrigatório.");
      } else if (!isValidPhone(formData.responsiblePhone)) {
        errors.push("O telefone do responsável é inválido.");
      }

      if (!formData.responsibleEmail?.trim()) {
        errors.push("O e-mail do responsável é obrigatório.");
      } else if (!isValidEmail(formData.responsibleEmail)) {
        errors.push("O e-mail do responsável é inválido.");
      }
    }

    setFormErrors(errors);
    return errors.length === 0;
  };

  const nextStep = () => {
    if (step === 1 && validateStep1()) setStep(2);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth") || "{}");
    if (auth.isLoggedIn) {
      router.push("/home");
    } else {
      setIsCheckingAuth(false);
    }
  }, [router]);

  const title =
    profileType === "responsable"
      ? "Criar Conta – Responsável"
      : "Criar Conta – Usuário Principal";
  const subtitle =
    profileType === "responsable"
      ? "Você será responsável por alguém que usará o sistema"
      : "Você usará o sistema com auxílio de um responsável";

  const kinshipOptions = [
    { label: "Filho(a)", value: "child" },
    { label: "Neto(a)", value: "grandchild" },
    { label: "Pai / Mãe", value: "parent" },
    { label: "Avô / Avó", value: "grandparent" },
    { label: "Tio / Tia", value: "uncle_aunt" },
    { label: "Irmão / Irmã", value: "sibling" },
    { label: "Primo / Prima", value: "cousin" },
    { label: "Enteado(a)", value: "stepchild" },
    { label: "Padrasto / Madrasta", value: "stepparent" },
    { label: "Tutor(a) legal", value: "legal_guardian" },
    { label: "Responsável profissional", value: "professional_guardian" },
    { label: "Outro", value: "other" },
  ];

  if (isCheckingAuth) {
    return (
      <Box
        sx={{
          height: "100vh",
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
    <AuthPageLayout>
      <TitleSm>{title}</TitleSm>
      <ParagraphSm>{subtitle}</ParagraphSm>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 3,
          justifyContent: "center",
          alignItems: "center",
          my: 2,
        }}
      >
        {formErrors.length > 0 && (
          <Alert severity="error" sx={{ width: "80%" }}>
            {formErrors.map((error, i) => (
              <div key={i}>{error}</div>
            ))}
          </Alert>
        )}

        {step === 1 && (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CustomSelectField
              label="Tipo de perfil"
              options={[
                { label: "Sou Responsável", value: "responsable" },
                { label: "Sou Usuário Principal", value: "main" },
              ]}
              value={profileType}
              onChange={(e) => setProfileType(e.target.value as any)}
            />
            <CustomTextField
              label="Nome completo"
              placeholder="Maria da Silva"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />
            <CustomTextField
              label="E-mail"
              placeholder="maria@email.com"
              icon={<EmailIcon />}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <CustomTextField
              label="Telefone"
              placeholder="(11) 91234-5678"
              icon={<PhoneIcon />}
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            <CustomTextField
              label="Senha"
              placeholder="********"
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <CustomTextField
              label="Confirmar senha"
              placeholder="********"
              type="password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
            />
            <CustomButton label="Continuar" onClick={nextStep} />
          </Box>
        )}

        {step === 2 && (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {profileType === "responsable" ? (
              <>
                <CustomTextField
                  label="Nome da pessoa acompanhada"
                  placeholder="Ana Paula"
                  value={formData.dependentName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      dependentName: e.target.value,
                    })
                  }
                />
                <CustomSelectField
                  label="Grau de parentesco"
                  options={kinshipOptions}
                  value={degreeOfKinship}
                  onChange={(e) => setDegreeOfKinship(e.target.value)}
                />
                <CustomTextField
                  label="E-mail"
                  placeholder="ana@email.com"
                  icon={<EmailIcon />}
                  value={formData.dependentEmail}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      dependentEmail: e.target.value,
                    })
                  }
                />
                <CustomTextField
                  label="Telefone"
                  placeholder="(11) 91234-5678"
                  icon={<PhoneIcon />}
                  value={formData.dependentPhone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      dependentPhone: e.target.value,
                    })
                  }
                />
                <CustomSelectField
                  label="Seletor de acesso"
                  options={[
                    {
                      label: "Cadastrar senha simplificada",
                      value: "password",
                    },
                    { label: "Gerar Link", value: "link" },
                  ]}
                  value={accessSelector}
                  onChange={(e) => setAccessSelector(e.target.value)}
                />
                {accessSelector === "password" && (
                  <>
                    <CustomTextField
                      label="Senha"
                      placeholder="********"
                      type="password"
                      value={formData.dependentPassword}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dependentPassword: e.target.value,
                        })
                      }
                    />
                    <CustomTextField
                      label="Confirmar senha"
                      placeholder="********"
                      type="password"
                      value={formData.dependentConfirmPassword}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dependentConfirmPassword: e.target.value,
                        })
                      }
                    />
                  </>
                )}
              </>
            ) : (
              <>
                <CustomTextField
                  label="Nome do responsável"
                  placeholder="João da Silva"
                  value={formData.responsibleName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      responsibleName: e.target.value,
                    })
                  }
                />
                <CustomSelectField
                  label="Grau de relação"
                  options={kinshipOptions}
                  value={degreeOfKinship}
                  onChange={(e) => setDegreeOfKinship(e.target.value)}
                />
                <CustomTextField
                  label="Telefone do responsável"
                  placeholder="(11) 98765-4321"
                  icon={<PhoneIcon />}
                  value={formData.responsiblePhone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      responsiblePhone: e.target.value,
                    })
                  }
                />
                <CustomTextField
                  label="E-mail do responsável"
                  placeholder="joao@email.com"
                  icon={<EmailIcon />}
                  value={formData.responsibleEmail}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      responsibleEmail: e.target.value,
                    })
                  }
                />
              </>
            )}
            <Box display="flex" gap={2} width={"80%"}>
              <CustomButton
                label="Voltar"
                onClick={prevStep}
                variant="cancel"
              />
              <CustomButton
                label="Cadastrar"
                onClick={() => {
                  if (validateStep2()) {
                    toast.success("Conta criada com sucesso!");
                  }
                }}
              />
            </Box>
          </Box>
        )}
      </Box>

      <CustomDivider />
      <Box sx={{ width: "80%", display: "flex", justifyContent: "left" }}>
        <Paragraph onClick={() => (window.location.href = "/login")}>
          Já tem conta? Faça login
        </Paragraph>
      </Box>
    </AuthPageLayout>
  );
}
