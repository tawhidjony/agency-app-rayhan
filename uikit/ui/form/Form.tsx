import React,{ useImperativeHandle } from "react";
import {   DefaultValues, FormProvider,  useForm,  } from "react-hook-form"
import { z, ZodType } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProps } from "./types/form.type";
import { FormContext } from "./formContext";
import { cn } from "@/uikit/cn";


export const Form = <TSchema extends ZodType>(props: FormProps<TSchema>) => {

    const { schema, defaultValues, onSubmit, mode = "onChange", ref, children } = props
    type FormValues = z.infer<TSchema>

    const form = useForm<FormValues>({
        mode,
        resolver: zodResolver(schema),
        defaultValues: defaultValues as DefaultValues<FormValues>
    })

    useImperativeHandle(ref, () => ({
        control: form.control,
        formState: form.formState,
        getValues: form.getValues,
        setValue: form.setValue,
        reset: form.reset,
        form: form
    }), [form])

    return (
        <FormContext value={{ control: form.control }}>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className={cn("w-full", props?.className)}>
                    {children}
                </form>
            </FormProvider>
        </FormContext>
    )
}
