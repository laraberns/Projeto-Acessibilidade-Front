export interface ICustomDatePicker {
  label: string;
  value: Date | null;
  onChange: (newValue: Date | null) => void;
  required?: boolean;
  error?: boolean;
  helperText?: string;
}
