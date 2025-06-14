import { TextFieldProps } from "@mui/material";
import { ReactNode } from "react";

export interface ICustomTextField extends Omit<TextFieldProps, "variant"> {
  icon?: ReactNode;
  required?: boolean;
}