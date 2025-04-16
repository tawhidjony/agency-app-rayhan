import { createContext, useContext } from "react"
import { Control, FieldValues } from "react-hook-form"

export type FormContextType<TFormValues extends FieldValues = any> = {
    control: Control<TFormValues>
  }
  
export const FormContext = createContext<FormContextType | null>(null)
  
export  const useFormContext =<TFormValues extends FieldValues = any>() => {
    const context = useContext(FormContext)
    if (!context) {
      throw new Error('useUiFormContext must be used within a UiForm component')
    }
    return context.control as Control<TFormValues   >
}