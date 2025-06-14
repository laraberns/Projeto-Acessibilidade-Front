
interface ICustomCardActivity {
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