import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  notificationMessage?: SortOrder;
  notificationStatus?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  user?: SortOrder;
  userReference?: SortOrder;
};
