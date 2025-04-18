"use client";
import { Form, FormRefProps } from "@/uikit/ui";
import { useRef } from "react";
import {
  userDefaultValues,
  userSchema,
  UserSchemaType,
} from "./supplierType.form.model";
import SupplierTypeFormView from "./supplierType.form.view";
export default function SupplierTypeFormComponent() {
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
      <SupplierTypeFormView formRef={formRef} />
    </Form>
  );
}
