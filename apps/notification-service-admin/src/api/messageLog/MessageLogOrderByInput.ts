import { SortOrder } from "../../util/SortOrder";

export type MessageLogOrderByInput = {
  createdAt?: SortOrder;
  event?: SortOrder;
  eventDetail?: SortOrder;
  id?: SortOrder;
  loggedAt?: SortOrder;
  updatedAt?: SortOrder;
};
