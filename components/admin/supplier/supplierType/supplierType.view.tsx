"use client"
import { TBasicViewProps } from '@/common';
import SupplierTypeFormComponent from './form/supplierType.form.component';
import { SupplierTypeSchemaType } from './form/supplierType.form.model';
import SupplierTypeListComponent from './list/supplierType.list.component';

export default function SupplierTypeView({formRef}:TBasicViewProps<SupplierTypeSchemaType>) {
    return (
        <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-4'>
                <SupplierTypeFormComponent formRef={formRef} />
            </div>
            <div className='col-span-8 '>
                <SupplierTypeListComponent  />
            </div>
        </div>
    )
}