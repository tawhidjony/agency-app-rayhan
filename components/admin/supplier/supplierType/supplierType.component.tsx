"use client"
import { FormRefProps } from '@/uikit/ui';
import { useRef } from 'react';
import { SupplierTypeSchemaType } from './form/supplierType.form.model';
import SupplierTypeView from './supplierType.view';

const SupplierTypeComponent = () => {
  const formRef = useRef<FormRefProps<SupplierTypeSchemaType>>(null);
  return (  <SupplierTypeView formRef={formRef} /> )
}

export default SupplierTypeComponent