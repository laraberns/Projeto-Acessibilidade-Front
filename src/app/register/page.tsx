"use client";

import { useState } from "react";
import { Box } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { AnimatePresence, motion } from "framer-motion";
import AuthPageLayout from "@/app/components/Layouts/AuthPageLayout";
import TitleSm from "@/app/components/Typography/TitleSm";
import ParagraphSm from "@/app/components/Typography/ParagraphSm";
import Paragraph from "@/app/components/Typography/Paragraph";
import CustomTextField from "@/app/components/CustomTextField";
import CustomSelectField from "@/app/components/CustomSelectField";
import CustomButton from "@/app/components/CustomButton";
import CustomDivider from "@/app/components/Divider";

export default function Register() {
  const [step, setStep] = useState(1);
  const [profileType, setProfileType] = useState<"responsable" | "main">(
    "responsable"
  );
  const [degreeOfKinship, setDegreeOfKinship] = useState("child");
  const [accessSelector, setAccessSelector] = useState("password");

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

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

  const StepWrapper = ({ children }: { children: React.ReactNode }) => (
    <motion.div
      initial={{ opacity: 0, x: step === 1 ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: step === 1 ? 50 : -50 }}
      transition={{ duration: 0.3 }}
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </motion.div>
  );

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
        <AnimatePresence mode="wait">
          {step === 1 && (
            <StepWrapper key="step1">
              <CustomSelectField
                label="Tipo de perfil"
                options={[
                  { label: "Sou Responsável", value: "responsable" },
                  { label: "Sou Usuário Principal", value: "main" },
                ]}
                value={profileType}
                onChange={(e) =>
                  setProfileType(e.target.value as "responsable" | "main")
                }
              />
              <CustomTextField
                label="Nome completo"
                placeholder="Maria da Silva"
              />
              <CustomTextField
                label="E-mail"
                placeholder="maria@email.com"
                icon={<EmailIcon />}
              />
              <CustomTextField
                label="Telefone"
                placeholder="(11) 91234-5678"
                icon={<PhoneIcon />}
              />
              <CustomTextField label="Senha" placeholder="********" />
              <CustomTextField label="Confirmar senha" placeholder="********" />
              <CustomButton label="Continuar" onClick={nextStep} />
            </StepWrapper>
          )}

          {step === 2 && (
            <StepWrapper key="step2">
              {profileType === "responsable" ? (
                <>
                  <CustomTextField
                    label="Nome da pessoa acompanhada"
                    placeholder="Ana Paula"
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
                  />
                  <CustomTextField
                    label="Telefone"
                    placeholder="(11) 91234-5678"
                    icon={<PhoneIcon />}
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
                      <CustomTextField label="Senha" placeholder="********" />
                      <CustomTextField
                        label="Confirmar senha"
                        placeholder="********"
                      />
                    </>
                  )}
                </>
              ) : (
                <>
                  <CustomTextField
                    label="Nome do responsável"
                    placeholder="João da Silva"
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
                  />
                  <CustomTextField
                    label="E-mail do responsável"
                    placeholder="joao@email.com"
                    icon={<EmailIcon />}
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
                  onClick={() => alert("Conta criada")}
                />
              </Box>
            </StepWrapper>
          )}
        </AnimatePresence>
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
