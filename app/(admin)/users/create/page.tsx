import dynamic from "next/dynamic";
const UserFormComponent = dynamic(
  () => import("@/components/admin/users/form/user.form.component")
);
export default function Create() {
  return <UserFormComponent />;
}
