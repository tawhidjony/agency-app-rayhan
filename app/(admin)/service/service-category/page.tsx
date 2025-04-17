import dynamic from "next/dynamic";
import { Fragment, Suspense } from "react";
const ServiceCategoryComponent = dynamic(
  () =>
    import(
      "@/components/admin/service/serviceCategory/serviceCategory.component"
    )
);
export default function ServiceCategory() {
  return (
    <Suspense fallback={<Fragment></Fragment>}>
      <ServiceCategoryComponent />
    </Suspense>
  );
}
