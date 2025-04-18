"use client";
import { Form, FormRefProps } from "@/uikit/ui";
import { useRef } from "react";
import {
  userDefaultValues,
  userSchema,
  UserSchemaType,
} from "./supplier.form.model";
import SupplierFormView from "./supplier.form.view";
export default function SupplierFormComponent() {
  const formRef = useRef<FormRefProps<UserSchemaType>>(null);
  const onSubmitHandler = async (value: UserSchemaType) => {
    console.log(value);
  };

  return (
    <Form
      defaultValues={userDefaultValues}
      onSubmit={onSubmitHandler}
      schema={userSchema}
      ref={formRef}
    >
      <SupplierFormView formRef={formRef} />
    </Form>
  );
}
