"use client";
import { fetchLeadList, LeadQueryKey } from "@/common/api";
import useTable from "@/hooks/useTable";
import LeadListFilter from "./lead.list.filter";
import LeadListHeader from "./lead.list.header";
import LeadListListItem from "./lead.list.listItem";
import { LeadEntity } from "./lead.list.model";
import LeadListView from "./lead.list.view";

export default function LeadListComponent() {
  const table_hook = useTable<LeadEntity>({
    fetchList: {
      queryKey: LeadQueryKey,
      queryFnApi: fetchLeadList,
    },
    tableHeader: LeadListListItem(),
    tableFilter: (params) => <LeadListFilter {...params} />,
  });
  return (
    <div className="p-2">
      <LeadListHeader />
      <LeadListView tableComponent={<table_hook.component />} />
    </div>
  );
}
