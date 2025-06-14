export interface ICustomModalCheckActivity {
  open: boolean;
  onClose: () => void;
  onSave: () => void;
  activity: {
    title: string;
    hour: string;
    currentState: "active" | "done";
  };
}
