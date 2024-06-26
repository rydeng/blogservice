import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PostTitle } from "../post/PostTitle";

export const CommentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <TextInput label="content" multiline source="content" />
        <ReferenceInput source="post.id" reference="Post" label="Post">
          <SelectInput optionText={PostTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
