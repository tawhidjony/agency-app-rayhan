import apiConfig from "@/common/http/apiConfig";

export const DepartmentQueryKey = "department";

// api endpoint
const ApiEndPoint = {
    LISTS_API: "/departments/",
} 
//  api config 
export const fetchDepartmentLists = async <R>(page: number, perPage: number): Promise<R> => {
    const res = await apiConfig.get<R>(ApiEndPoint.LISTS_API,{
        params: {
            page: page,
            per_page: perPage,
        },
    });
    return res.data;
};

