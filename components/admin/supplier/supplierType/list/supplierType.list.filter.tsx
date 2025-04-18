import { TableFilterItemTab } from "@/common/components";
import { ActionDropdown, OutlineButton } from "@/uikit/ui";
export default function SupplierTypeListFilter() {
  const tabs = [
    { name: "All", count: 10 },
    { name: "Draft", count: 5 },
    { name: "Trash", count: 2 },
  ];
  return (<>
  <TableFilterItemTab tabs={tabs} />
    <div className="md:flex items-center mb-4">
      <div className="min-w-56 md:mr-1">
        <ActionDropdown
          onChange={(e) => console.log(e)}
          options={[{ id: 1, label: "Action" }]}
        />
      </div>
      <div className="md:mx-2">
        <OutlineButton className="px-8">Apply</OutlineButton>
      </div>
    </div>
    </>
  );
}
