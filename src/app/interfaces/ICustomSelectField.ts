import { SelectChangeEvent } from "@mui/material";
import { ReactNode } from "react";

export interface ICustomSelectField {
  label: string;
  icon?: ReactNode;
  required?: boolean;
  options: { label: string; value: string | number }[];
  value: string;
  onChange: (event: SelectChangeEvent) => void;
  disabled?: boolean;
}