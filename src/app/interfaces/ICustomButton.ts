export interface ICustomButton {
  label: string;
  onClick: () => void;
  variant?: "default" | "cancel" | "danger";
}