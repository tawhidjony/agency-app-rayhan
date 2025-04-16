import React, { Fragment, InputHTMLAttributes } from "react"
import { Controller, FieldValues, Path } from "react-hook-form"
import { useFormContext } from "./formContext"
import { cn } from "@/uikit/cn"
import InputLabel from "../basic/InputLabel"

type FormInputProps<T extends FieldValues> = {
    name: Path<T>
    label?: string
    labelColor?: string
} & InputHTMLAttributes<HTMLInputElement>

export const  FormTextField = <T extends FieldValues>(props: FormInputProps<T>) => {
    const control = useFormContext<T>()
    const {name, ...rest} = props
    return (
        <Controller
            control={control}
            name={props.name}
            render={({ field, fieldState }) => {
              return (
                <Fragment>
                  {props.label && (<InputLabel labelColor={props?.labelColor} >{props?.label}</InputLabel>)}
                  <input 
                    type="text" 
                    className={cn(
                        "w-full p-2 border border-gray-300 rounded my-1 focus:outline-none focus:ring-1 focus:ring-blue-400", 
                        rest?.className,
                        fieldState?.error && "border-red-500"
                      )}
                    {...field}
                    {...rest}
                  />
                  {fieldState?.error && <small className="text-red-500">{fieldState?.error?.message}</small>}
                </Fragment>
              )
            }}
        />
    )
}

