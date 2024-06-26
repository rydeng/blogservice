import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type NotificationWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  notificationMessage?: StringNullableFilter;
  notificationStatus?: StringNullableFilter;
  status?: StringNullableFilter;
  user?: StringNullableFilter;
  userReference?: StringNullableFilter;
};
