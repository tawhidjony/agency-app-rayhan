import dynamic from "next/dynamic"
import { Suspense } from "react"

const SupplierTypeLisComponent = dynamic(()=> import("@/components/admin/supplier/supplierType/list/supplierType.list.component"))

export default function SupplierType() {
  return (
   <Suspense>
     <SupplierTypeLisComponent />
   </Suspense>
  )
}