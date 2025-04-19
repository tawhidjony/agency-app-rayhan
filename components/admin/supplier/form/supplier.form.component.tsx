"use client";
import { SupplierTypeEntity } from "@/common";
import { fetchSupplierTypesCreate } from "@/common/api";
import { Form, FormRefProps } from "@/uikit/ui";
import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import { SupplierTypeSchemaType, supplierTypeDefaultValues, supplierTypeSchema } from "./supplier.form.model";
import SupplierFormView from "./supplier.form.view";
export default function SupplierFormComponent() {
  const formRef = useRef<FormRefProps<SupplierTypeSchemaType>>(null);
  const mutation = useMutation<SupplierTypeEntity, Error, SupplierTypeSchemaType>({
    mutationFn: (value) => fetchSupplierTypesCreate<SupplierTypeSchemaType, SupplierTypeEntity>(value),
    onSuccess: (data) => {
      console.log(data);
      formRef.current?.reset()
    },
  });

  const onSubmitHandler = async (value: SupplierTypeSchemaType) => {
    mutation.mutateAsync(value)
  };

  return (
    <Form
      defaultValues={supplierTypeDefaultValues}
      onSubmit={onSubmitHandler}
      schema={supplierTypeSchema}
      ref={formRef}
    >
      <SupplierFormView formRef={formRef} />
    </Form>
  );
}
