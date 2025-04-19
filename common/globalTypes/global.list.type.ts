import { type FormRefProps } from "@/uikit/ui";
import { ElementType, RefObject } from "react";
import { FieldValues } from "react-hook-form";

export type TBasicListViewProps = {
    tableComponent: ElementType<any, any>;
};

export type TBasicFormViewProps<T extends FieldValues> = {
     onSubmit?: (value:T) => void;
     formRef?:  RefObject<FormRefProps<T> | null>
};

export type TBasicDefaultProps<T extends FieldValues> = TBasicFormViewProps<T>
export type TBasicViewProps<T extends FieldValues> = TBasicFormViewProps<T>
export type TBasicComponentProps<T extends FieldValues> = TBasicFormViewProps<T>
export type TBasicFormComponentProps<T extends FieldValues> = TBasicFormViewProps<T>
  