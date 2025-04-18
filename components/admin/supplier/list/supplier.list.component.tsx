"use client";
import { UserEntity } from "@/common";
import { fetchUserLists, UserQueryKey } from "@/common/api";
import useTable from "@/hooks/useTable";
import SupplierListFilter from "./supplier.list.filter";
import SupplierListHeader from "./supplier.list.header";
import SupplierListListItem from "./supplier.list.listItem";
import SupplierListView from "./supplier.list.view";

export default function SupplierListComponent() {
  const table_hook = useTable<UserEntity>({
    fetchList: {
      queryKey: UserQueryKey,
      queryFnApi: fetchUserLists,
    },
    tableHeader: SupplierListListItem(),
    tableFilter: (params) => <SupplierListFilter {...params} />,
  });
  return (
    <div className="p-2">
      <SupplierListHeader />
      <SupplierListView tableComponent={<table_hook.component />} />
    </div>
  );
}
