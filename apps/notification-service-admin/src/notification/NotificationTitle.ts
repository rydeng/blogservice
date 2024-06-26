import { Notification as TNotification } from "../api/notification/Notification";

export const NOTIFICATION_TITLE_FIELD = "notificationStatus";

export const NotificationTitle = (record: TNotification): string => {
  return record.notificationStatus?.toString() || String(record.id);
};
