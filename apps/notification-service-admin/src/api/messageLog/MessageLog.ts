export type MessageLog = {
  createdAt: Date;
  event: string | null;
  eventDetail: string | null;
  id: string;
  loggedAt: Date | null;
  updatedAt: Date;
};
