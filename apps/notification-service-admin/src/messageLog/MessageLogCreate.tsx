import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const MessageLogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="event" multiline source="event" />
        <TextInput label="eventDetail" multiline source="eventDetail" />
        <DateTimeInput label="loggedAt" source="loggedAt" />
      </SimpleForm>
    </Create>
  );
};
