import apiConfig from "@/common/http/apiConfig";

export const SupplierTypesQueryKey = "supplierTypes";
// api endpoint
const ApiEndPoint = {
    LISTS_API: "/supplier-types/",
} 

//  api config 
export const fetchSupplierTypesList = async <R>(page: number, perPage: number): Promise<R> => {
    const res = await apiConfig.get<R>(ApiEndPoint.LISTS_API,{
        params: {
            page: page,
            per_page: perPage,
        },
    });
    return res.data;
};
