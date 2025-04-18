import apiConfig from "../../http/apiConfig";

export const RoleQueryKey = "role";

// api endpoint
const ApiEndPoint = {
    LISTS_API: "/roles/",
}


//  api config 
export const fetchRoleList = async <R>(page: number, perPage: number): Promise<R> => {
    const res = await apiConfig.get<R>(ApiEndPoint.LISTS_API,{
        params: {
            page: page,
            per_page: perPage,
        },
    });
    return res.data;
};

