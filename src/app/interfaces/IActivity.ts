export interface IActivity {
  title: string;
  date: string;
  hour: string;
  state: "active" | "done" | string;
  description?: string;
}
