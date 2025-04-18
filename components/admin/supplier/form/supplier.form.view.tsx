"use client";
import { TBasicFormViewProps } from "@/common";
import {
  Card,
  FormTextField,
  OutlineButton
} from "@/uikit/ui";
import { SupllierTypeSchemaType, supplierTypeDefaultValues } from "./supplier.form.model";

export default function SupplierFormView(
  props: TBasicFormViewProps<SupllierTypeSchemaType>
) {
  const { formRef } = props;

  return (
    <div className="">
      <h2 className="text-2xl font-semibold mb-2">Add New Supplier Type</h2>
      {/* add new user */}
      <div className="mt-2">
        <Card>
          <Card.Body>
            <div className="px-2 pb-4">
              <div className="mt-3">
                <FormTextField<SupllierTypeSchemaType>
                  name="name"
                  label="Name"
                  placeholder="Name"
                />
              </div>
            </div>
          </Card.Body>
        </Card>
        {/* add button */}
        <div className="mt-6 lg:w-full md:w-2/6 flex gap-4 justify-end">
          <OutlineButton
            type="button"
            onClick={() => formRef?.current?.reset(supplierTypeDefaultValues)}
          >
            Clear
          </OutlineButton>
          <OutlineButton type="submit">Add</OutlineButton>
        </div>
      </div>
    </div>
  );
}
