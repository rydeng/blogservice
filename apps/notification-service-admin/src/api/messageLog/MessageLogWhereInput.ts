import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MessageLogWhereInput = {
  event?: StringNullableFilter;
  eventDetail?: StringNullableFilter;
  id?: StringFilter;
  loggedAt?: DateTimeNullableFilter;
};
