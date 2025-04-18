import dynamic from "next/dynamic";
import { Suspense } from "react";
const PermissionListComponent = dynamic(
  () => import("@/components/admin/userManagement/permissions/list/permission.list.component")
);
export default function User() {
  return (
    <Suspense fallback={<></>}>
      <PermissionListComponent />
    </Suspense>
  );
}
