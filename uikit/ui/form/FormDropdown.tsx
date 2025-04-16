import { Fragment } from "react";
import { Controller, FieldValues, Path } from "react-hook-form";
import { ActionDropdown } from "../basic";
import { useFormContext } from "./formContext";

type FormDropdownProps<T extends FieldValues> = {
  name: Path<T>;
  className?: string;
  options: { id: number; label: string }[];
};

export const FormDropdown = <T extends FieldValues>(
  props: FormDropdownProps<T>
) => {
  const { control } = useFormContext<T>();
  const { name, options = [], className, ...rest } = props;
  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field: { ref, value, onChange }, fieldState }) => {
        return (
          <Fragment>
            <ActionDropdown onChange={onChange} options={options} />
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
