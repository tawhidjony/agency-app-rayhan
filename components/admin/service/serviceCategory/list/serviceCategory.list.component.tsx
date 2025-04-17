"use client";
import {
  fetchServiceCategoryList,
  ServiceCategoriesQueryKey,
} from "@/common/api";
import { ServiceCategoryEntity } from "@/common/entity/services/serviceCategory.entity";
import useTable from "@/hooks/useTable";
import ServiceCategoryListFilter from "./serviceCategory.list.filter";
import ServiceCategoryListHeader from "./serviceCategory.list.header";
import ServiceCategoryListListItem from "./serviceCategory.list.listItem";
import ServiceCategoryListView from "./serviceCategory.list.view";

export default function ServiceCategoryListComponent() {
  const table_hook = useTable<ServiceCategoryEntity>({
    fetchList: {
      queryKey: ServiceCategoriesQueryKey,
      queryFnApi: fetchServiceCategoryList,
    },
    tableHeader: ServiceCategoryListListItem(),
    tableFilter: (params) => <ServiceCategoryListFilter {...params} />,
  });
  return (
    <div className="p-2">
      <ServiceCategoryListHeader />
      <ServiceCategoryListView tableComponent={<table_hook.component />} />
    </div>
  );
}
