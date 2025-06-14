import { ReactNode } from "react";

export interface ISidebarMenuItem {
  icon: ReactNode;
  label: string;
  selected?: boolean;
  onClick?: () => void;
  showLabel?: boolean;
}
