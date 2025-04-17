"use client";
import { fetchServiceTypesList, ServiceTypesQueryKey } from "@/common/api";
import { ServiceTypesEntity } from "@/common/entity/services/serviceTypes.entity";
import useTable from "@/hooks/useTable";
import ServiceTypesListFilter from "./serviceTypes.list.filter";
import ServiceTypesListHeader from "./serviceTypes.list.header";
import ServiceTypesListListItem from "./serviceTypes.list.listItem";
import ServiceTypesListView from "./serviceTypes.list.view";

export default function ServiceTypesListComponent() {
  const table_hook = useTable<ServiceTypesEntity>({
    fetchList: {
      queryKey: ServiceTypesQueryKey,
      queryFnApi: fetchServiceTypesList,
    },
    tableHeader: ServiceTypesListListItem(),
    tableFilter: (params) => <ServiceTypesListFilter {...params} />,
  });
  return (
    <div className="p-2">
      <ServiceTypesListHeader />
      <ServiceTypesListView tableComponent={<table_hook.component />} />
    </div>
  );
}
