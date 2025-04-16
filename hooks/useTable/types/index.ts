import { ColumnDef } from "@tanstack/react-table";
import { JSX } from "react";
export type defaultRefType = {
    pageIndex: number,
    pageSize: number,
    inputPage: string,
    globalFilter: string,
    total: number,
}

export const defaultRef: defaultRefType = {
    pageIndex: 0,
    pageSize: 5,
    inputPage: "",
    globalFilter: "",
    total: 0,
}


export interface UseTableProps<T> {
    columns: ColumnDef<T, unknown>[];
    APIEndpoint: string;
    APIKey: string;
    listFilter?: boolean;
    globalSearch?: boolean;
}

export interface ColumnMetaProps {
    enableFilter?: boolean;
}

export type TableHookProps<T> = {
    tableHeader: any;
    dataSource?: T[];
    tableFilter: (table:any) => JSX.Element;
    fetchList: {
        page: number;
        perPage: number;
        queryKey: [string, number];
        queryFnApi: <R>(page: number, perPage: number) => Promise<R>;
        placeholderData?: boolean;
    };
}
