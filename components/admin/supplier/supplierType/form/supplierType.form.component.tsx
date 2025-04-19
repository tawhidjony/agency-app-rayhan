"use client";
import { refetchFn, SupplierTypeEntity, TBasicFormComponentProps } from "@/common";
import { fetchSupplierTypesCreate, fetchSupplierTypesEdit, fetchSupplierTypesSingle, SupplierTypesQueryKey } from "@/common/api";
import { useEdit } from "@/hooks/useEdit";
import { Form } from "@/uikit/ui";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supplierTypeDefaultValues, supplierTypeSchema, SupplierTypeSchemaType } from "./supplierType.form.model";
import SupplierTypeFormView from "./supplierType.form.view";

export default function SupplierTypeFormComponent({formRef}:TBasicFormComponentProps<SupplierTypeSchemaType>) {
  const queryClient = useQueryClient()

  const {id, isEdit } = useEdit<SupplierTypeSchemaType, SupplierTypeEntity>({
    defaultValues:supplierTypeDefaultValues,
    queryKey: SupplierTypesQueryKey.Edit,
    queryFnApi: fetchSupplierTypesSingle,
    resetValues: (value) => formRef?.current?.reset(value)
  })


  const mutation = useMutation<SupplierTypeEntity, Error, SupplierTypeSchemaType>({
    mutationKey:[SupplierTypesQueryKey.Create],
    mutationFn: (value) => isEdit ? fetchSupplierTypesEdit<SupplierTypeSchemaType, SupplierTypeEntity>(id, value):fetchSupplierTypesCreate<SupplierTypeSchemaType, SupplierTypeEntity>(value),
    onSuccess: () => {formRef?.current?.reset()},
    onSettled:() => refetchFn(queryClient, SupplierTypesQueryKey.List),
  });

  const onSubmitHandler = async (value: SupplierTypeSchemaType) => {
    if (isEdit) {
       mutation.mutateAsync(value)
    }else{
      mutation.mutateAsync(value)
    }
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
