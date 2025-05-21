"use client";

import { Box, Card, Chip, IconButton, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/EditOutlined";
import { grayColor, greenColor, orangeColor } from "@/app/styles/colors";

interface CustomCardActivityProps {
  title: string;
  hour: string;
  state: string;
  onEdit?: () => void;
  onDelete?: () => void;
  onRequestToggleComplete?: (
    currentState: "active" | "done",
    title: string,
    hour: string
  ) => void;
}

export default function CustomCardActivity({
  title,
  hour,
  state,
  onEdit,
  onDelete,
  onRequestToggleComplete,
}: CustomCardActivityProps) {
  const chipLabel = state === "done" ? "Finalizado" : "Pendente";
  const chipColor =
    state === "done"
      ? greenColor.greenColorBase
      : orangeColor.orangeColorPrimaryBase;

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        padding: 2,
        borderLeft: `6px solid ${chipColor}`,
        width: {
          xs: "100%",
          md: "70%",
        },
        boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.15)",
        borderRadius: 2,
      }}
    >
      <Chip
        label={chipLabel}
        sx={{
          width: "fit-content",
          backgroundColor: chipColor,
          color: "white",
          fontWeight: "bold",
        }}
      />

      <Typography
        sx={{
          fontWeight: "bold",
          color: grayColor.grayColorDarken2,
          fontSize: "1.5rem",
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{ color: grayColor.grayColorPrimaryLigthen2, fontSize: "1.25rem" }}
      >
        {hour}
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1, mt: 1 }}>
        <IconButton
          onClick={() =>
            onRequestToggleComplete?.(state as "active" | "done", title, hour)
          }
        >
          <CheckIcon
            sx={{
              fontSize: 32,
              color:
                state === "done"
                  ? grayColor.grayColorDarken1
                  : greenColor.greenColorBase,
            }}
          />
        </IconButton>

        <IconButton onClick={onEdit}>
          <EditIcon sx={{ fontSize: 32, color: grayColor.grayColorDarken1 }} />
        </IconButton>
        <IconButton onClick={onDelete}>
          <DeleteIcon
            sx={{ fontSize: 32, color: grayColor.grayColorDarken1 }}
          />
        </IconButton>
      </Box>
    </Card>
  );
}
