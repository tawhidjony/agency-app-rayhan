"use client";
import { SupplierTypeEntity } from "@/common";
import { fetchSupplierTypesCreate } from "@/common/api";
import { Form, FormRefProps } from "@/uikit/ui";
import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import { SupllierTypeSchemaType, supplierTypeDefaultValues, supplierTypeSchema } from "./supplierType.form.model";
import SupplierTypeFormView from "./supplierType.form.view";
export default function SupplierTypeFormComponent() {

  const formRef = useRef<FormRefProps<SupllierTypeSchemaType>>(null);
  const mutation = useMutation<SupplierTypeEntity, Error, SupllierTypeSchemaType>({
    mutationFn: (value) => fetchSupplierTypesCreate<SupllierTypeSchemaType, SupplierTypeEntity>(value),
    onSuccess: () => {
      formRef.current?.reset()
    },
  });

  const onSubmitHandler = async (value: SupllierTypeSchemaType) => {
    mutation.mutateAsync(value)
  };

  return (
    <Form
      defaultValues={supplierTypeDefaultValues}
      onSubmit={onSubmitHandler}
      schema={supplierTypeSchema}
      ref={formRef}
    >
      <SupplierTypeFormView formRef={formRef} />
    </Form>
  );
}
