"use client";
import { SupplierTypeEntity, TBasicComponentProps } from "@/common";
import { fetchSupplierTypesList, SupplierTypesQueryKey } from "@/common/api";
import useTable from "@/hooks/useTable";
import { SupplierTypeSchemaType } from "../form/supplierType.form.model";
import SupplierTypeListFilter from "./supplierType.list.filter";
import SupplierTypeListHeader from "./supplierType.list.header";
import SupplierTypeListListItem from "./supplierType.list.listItem";
import SupplierTypeListView from "./supplierType.list.view";

export default function SupplierTypeListComponent({formRef}:TBasicComponentProps<SupplierTypeSchemaType>) {
  const table_hook = useTable<SupplierTypeEntity>({
    fetchList: {
      queryKey: SupplierTypesQueryKey.List,
      queryFnApi: fetchSupplierTypesList,
    },
    tableHeader: SupplierTypeListListItem({formRef}),
    tableFilter: (params) => <SupplierTypeListFilter {...params} />,
  });
  return (
    <div className="p-2">
      <SupplierTypeListHeader />
      <SupplierTypeListView tableComponent={<table_hook.component />} />
    </div>
  );
}
