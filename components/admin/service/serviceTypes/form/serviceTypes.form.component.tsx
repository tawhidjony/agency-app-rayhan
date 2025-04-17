"use client";
import {Form, FormRefProps} from "@/uikit/ui";
import {useRef} from "react";
import {userDefaultValues, userSchema, UserSchemaType,} from "./serviceTypes.form.model";
import ServiceTypesFormView from "./serviceTypes.form.view";

export default function ServiceTypesFormComponent() {
    const formRef = useRef<FormRefProps<UserSchemaType>>(null);
    const onSubmitHandler = async (value: UserSchemaType) => {
        console.log(value);
    };

    return (
        <Form
            defaultValues={userDefaultValues}
            onSubmit={onSubmitHandler}
            schema={userSchema}
            ref={formRef}
        >
            <ServiceTypesFormView formRef={formRef}/>
        </Form>
    );
}
