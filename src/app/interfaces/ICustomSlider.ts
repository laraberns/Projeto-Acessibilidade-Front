import { IMark } from "./IMark";

export interface ICustomSlider {
  label: string;
  value: number;
  onChange: (value: number) => void;
  marks: IMark[];
  min?: number;
  max?: number;
}