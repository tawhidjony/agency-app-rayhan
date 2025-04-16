import { ApiDefaultType } from "@/common/globalTypes";
import { keepPreviousData, useQuery } from "@tanstack/react-query";


interface pageProps {
    page: number;
    perPage: number;
    queryKey: [string, number];
    queryFnApi: <R>(page: number, perPage: number) => Promise<R>;
    placeholderData?: boolean;
}

const MINUTE = 1000 * 60;

export const useFetchList =<T> ({page, perPage, queryKey, queryFnApi}:pageProps) => {
    return useQuery<ApiDefaultType<T[]>>({
      queryKey: queryKey,
      queryFn: () => queryFnApi<ApiDefaultType<T[]>>(page, perPage),
      staleTime: 2 * MINUTE,
      placeholderData: keepPreviousData,
    });
};