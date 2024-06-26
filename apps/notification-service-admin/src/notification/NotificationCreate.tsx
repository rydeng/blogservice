import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const NotificationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="message" multiline source="message" />
        <TextInput
          label="notificationMessage"
          multiline
          source="notificationMessage"
        />
        <TextInput label="notificationStatus" source="notificationStatus" />
        <TextInput label="status" source="status" />
        <TextInput label="user" source="user" />
        <TextInput label="userReference" source="userReference" />
      </SimpleForm>
    </Create>
  );
};
