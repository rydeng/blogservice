import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PostTitle } from "../post/PostTitle";

export const CommentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <TextInput label="content" multiline source="content" />
        <ReferenceInput source="post.id" reference="Post" label="Post">
          <SelectInput optionText={PostTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
