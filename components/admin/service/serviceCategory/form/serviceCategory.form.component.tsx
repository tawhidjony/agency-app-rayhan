"use client";
import {Form, FormRefProps} from "@/uikit/ui";
import {useRef} from "react";
import {userDefaultValues, userSchema, UserSchemaType,} from "./serviceCategory.form.model";
import ServiceCategoryFormView from "./serviceCategory.form.view";

export default function ServiceCategoryFormComponent() {
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
            <ServiceCategoryFormView formRef={formRef}/>
        </Form>
    );
}
