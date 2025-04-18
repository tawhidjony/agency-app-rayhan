import apiConfig from "../../http/apiConfig";

export const PermissionQueryKey = "permission";

// api endpoint
const ApiEndPoint = {
    LISTS_API: "/permissions/",
}


//  api config 
export const fetchPermissionList = async <R>(page: number, perPage: number): Promise<R> => {
    const res = await apiConfig.get<R>(ApiEndPoint.LISTS_API,{
        params: {
            page: page,
            per_page: perPage,
        },
    });
    return res.data;
};

