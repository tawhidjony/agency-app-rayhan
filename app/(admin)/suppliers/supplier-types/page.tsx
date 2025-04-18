import dynamic from "next/dynamic"
import { Suspense } from "react"

const SupplierTypeComponent = dynamic(()=> import("@/components/admin/supplier/supplierType/supplierType.component"))

export default function SupplierType() {
  return (
   <Suspense>
     <SupplierTypeComponent />
   </Suspense>
  )
}