import { IActivity } from "./IActivity";

export interface ICustomModalAddEditActivities {
  open: boolean;
  onClose: () => void;
  onSave: (activity: IActivity) => void;
  activityToEdit?: IActivity | null;
}
