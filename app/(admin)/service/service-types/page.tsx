import dynamic from "next/dynamic";
import { Fragment, Suspense } from "react";
const ServiceTypesComponent = dynamic(
  () => import("@/components/admin/service/serviceTypes/serviceTypes.component")
);
export default function ServiceTypes() {
  return (
    <Suspense fallback={<Fragment></Fragment>}>
      <ServiceTypesComponent />
    </Suspense>
  );
}
