import { Fragment, HTMLProps } from "react";
import { Controller, FieldValues, Path } from "react-hook-form";
import { Checkbox } from "../basic";
import { useFormContext } from "./formContext";

type FormCheckboxProps<T extends FieldValues> = {
  name: Path<T>;
  className?: string;
  label: string;
} & HTMLProps<HTMLInputElement>;

export const FormCheckbox = <T extends FieldValues>(
  props: FormCheckboxProps<T>
) => {
  const { control } = useFormContext<T>();
  const { name, label, className, ...rest } = props;
  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field, fieldState }) => {
        return (
          <Fragment>
            <Checkbox id={name} label={label} {...field} {...rest} />
            {fieldState?.error && (
              <small className="text-red-500">
                {fieldState?.error?.message}
              </small>
            )}
          </Fragment>
        );
      }}
    />
  );
};
