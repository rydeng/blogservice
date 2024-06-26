import { MessageLog as TMessageLog } from "../api/messageLog/MessageLog";

export const MESSAGELOG_TITLE_FIELD = "id";

export const MessageLogTitle = (record: TMessageLog): string => {
  return record.id?.toString() || String(record.id);
};
