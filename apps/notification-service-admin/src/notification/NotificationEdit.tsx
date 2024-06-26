import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const NotificationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
