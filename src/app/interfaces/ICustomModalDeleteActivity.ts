export interface ICustomModalDeleteActivity {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
  activity: {
    title: string;
    hour: string;
  };
}