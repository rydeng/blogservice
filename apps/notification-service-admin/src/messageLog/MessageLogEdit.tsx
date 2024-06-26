import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const MessageLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="event" multiline source="event" />
        <TextInput label="eventDetail" multiline source="eventDetail" />
        <DateTimeInput label="loggedAt" source="loggedAt" />
      </SimpleForm>
    </Edit>
  );
};
