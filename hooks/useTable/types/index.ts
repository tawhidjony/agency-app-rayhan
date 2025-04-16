import { JSX } from "react";

export const pageSize = 5;

export type TableHookProps<T> = {
    tableHeader: any;
    dataSource?: T[];
    tableFilter: (table:any) => JSX.Element;
    fetchList: {
        queryKey: string;
        queryFnApi: <R>(page: number, perPage: number) => Promise<R>;
        placeholderData?: boolean;
    };
}
