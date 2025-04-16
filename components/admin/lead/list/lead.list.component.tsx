"use client"
import { fetchLeadList, LeadQueryKey } from '@/common/api'
import useTable from '@/hooks/useTable'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import LeadListFilter from './lead.list.filter'
import LeadListHeader from './lead.list.header'
import LeadListListItem from './lead.list.listItem'
import { LeadEntity } from './lead.list.model'
import LeadListView from './lead.list.view'


export default function LeadListComponent() {
  
  const [data] = React.useState([
    {
      id: 1,
      name: "MD Ali Akbar",
      passport: "8659874203385",
      agent: { main: "Hasibur Rahman", subtitle: "By Rabbi" },
      source: "Offline",
      interest: "Malaysia",
      city: "Khulna",
      status: "Completed",
      date: { main: "Admin", subtitle: "Last Update 1hr ago" },
    },
    {
      id: 2,
      name: "Mamun Ahmed",
      passport: "8659874203385",
      agent: { main: "Hasibur Rahman" },
      source: "Website",
      interest: "UK",
      city: "Khulna",
      status: "Pending",
      date: { main: "10.06.2024", subtitle: "10.06.2024" },
    },
    {
      id: 3,
      name: "Shishir Ahmed",
      passport: "8659874203385",
      agent: { main: "Rajib Akron" },
      source: "Social",
      interest: "UK",
      city: "Khulna",
      status: "Received",
      date: { main: "15.06.2024" },
    },
    {
      id: 4,
      name: "Hannan Mia",
      passport: "8659874203385",
      agent: { main: "Raju Molla" },
      source: "Website",
      interest: "USA",
      city: "Khulna",
      status: "Pending",
      date: { main: "15.06.2024" },
    },
    {
      id: 5,
      name: "Sobuj Hossain",
      passport: "8659874203385",
      agent: { main: "Ebrahim Molla" },
      source: "Social",
      interest: "UK",
      city: "Khulna",
      status: "Received",
      date: { main: "15.06.2024" },
    },
    {
      id: 6,
      name: "Hemal Hossain",
      passport: "8659874203385",
      agent: { main: "Hafiz Gazi" },
      source: "Offline",
      interest: "USA",
      city: "Khulna",
      status: "Pending",
      date: { main: "15.06.2024" },
    },
    {
      id: 1,
      name: "MD Ali Akbar",
      passport: "8659874203385",
      agent: { main: "Hasibur Rahman", subtitle: "By Rabbi" },
      source: "Offline",
      interest: "Malaysia",
      city: "Khulna",
      status: "Completed",
      date: { main: "Admin", subtitle: "Last Update 1hr ago" },
    },
    {
      id: 2,
      name: "Mamun Ahmed",
      passport: "8659874203385",
      agent: { main: "Hasibur Rahman" },
      source: "Website",
      interest: "UK",
      city: "Khulna",
      status: "Pending",
      date: { main: "10.06.2024", subtitle: "10.06.2024" },
    },
    {
      id: 3,
      name: "Shishir Ahmed",
      passport: "8659874203385",
      agent: { main: "Rajib Akron" },
      source: "Social",
      interest: "UK",
      city: "Khulna",
      status: "Received",
      date: { main: "15.06.2024" },
    },
    {
      id: 4,
      name: "Hannan Mia",
      passport: "8659874203385",
      agent: { main: "Raju Molla" },
      source: "Website",
      interest: "USA",
      city: "Khulna",
      status: "Pending",
      date: { main: "15.06.2024" },
    },
    {
      id: 5,
      name: "Sobuj Hossain",
      passport: "8659874203385",
      agent: { main: "Ebrahim Molla" },
      source: "Social",
      interest: "UK",
      city: "Khulna",
      status: "Received",
      date: { main: "15.06.2024" },
    },
    {
      id: 6,
      name: "Hemal Hossain",
      passport: "8659874203385",
      agent: { main: "Hafiz Gazi" },
      source: "Offline",
      interest: "USA",
      city: "Khulna",
      status: "Pending",
      date: { main: "15.06.2024" },
    },
    {
      id: 1,
      name: "MD Ali Akbar",
      passport: "8659874203385",
      agent: { main: "Hasibur Rahman", subtitle: "By Rabbi" },
      source: "Offline",
      interest: "Malaysia",
      city: "Khulna",
      status: "Completed",
      date: { main: "Admin", subtitle: "Last Update 1hr ago" },
    },
    {
      id: 2,
      name: "Mamun Ahmed",
      passport: "8659874203385",
      agent: { main: "Hasibur Rahman" },
      source: "Website",
      interest: "UK",
      city: "Khulna",
      status: "Pending",
      date: { main: "10.06.2024", subtitle: "10.06.2024" },
    },
    {
      id: 3,
      name: "Shishir Ahmed",
      passport: "8659874203385",
      agent: { main: "Rajib Akron" },
      source: "Social",
      interest: "UK",
      city: "Khulna",
      status: "Received",
      date: { main: "15.06.2024" },
    },
    {
      id: 4,
      name: "Hannan Mia",
      passport: "8659874203385",
      agent: { main: "Raju Molla" },
      source: "Website",
      interest: "USA",
      city: "Khulna",
      status: "Pending",
      date: { main: "15.06.2024" },
    },
    {
      id: 5,
      name: "Sobuj Hossain",
      passport: "8659874203385",
      agent: { main: "Ebrahim Molla" },
      source: "Social",
      interest: "UK",
      city: "Khulna",
      status: "Received",
      date: { main: "15.06.2024" },
    },
    {
      id: 6,
      name: "Hemal Hossain",
      passport: "8659874203385",
      agent: { main: "Hafiz Gazi" },
      source: "Offline",
      interest: "USA",
      city: "Khulna",
      status: "Pending",
      date: { main: "15.06.2024" },
    },
  ]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  const [inputPage, setInputPage] = useState("");
  const perPage = 10;

  useEffect(() => {
      router.push(`?page=${page}`);
  }, [page, router]);

  // const { data:leadList, isLoading, isFetching, isSuccess } = useQuery<ApiDefaultType<UserEntity[]>>({
  //     queryKey: [LeadQueryKey, page],
  //     queryFn: () => fetchLeadList<ApiDefaultType<UserEntity[]>>(page, pageSize),
  //     staleTime: 2 * MINUTE,
  //     placeholderData: keepPreviousData,
  // });
  
  

  // const { data:listHook } = useFetchList<UserEntity>({ 
  //   page, 
  //   pageSize, 
  //   queryKey: [LeadQueryKey, page], 
  //   queryFnApi: fetchLeadList 
  // })
  // console.log("listHook", listHook);

  
  const table_hook = useTable<LeadEntity>({
    fetchList:{
      page,
      perPage,
      queryKey: [LeadQueryKey, page],
      queryFnApi: fetchLeadList,
    },
    dataSource: data,
    tableHeader: LeadListListItem(),
    tableFilter: (params) => <LeadListFilter {...params} />,
  })

  const {data:tableListDtaList, isLoading, isSuccess} = table_hook.tableData;
  console.log("tableListDtaList", tableListDtaList);
  
  if (isLoading) {
    return "Loading...";
  }
  if (isSuccess) {
    return (
      <div className="p-2">
        <LeadListHeader />
        <LeadListView tableComponent={table_hook.component()} />
      </div>
    )
  }
}