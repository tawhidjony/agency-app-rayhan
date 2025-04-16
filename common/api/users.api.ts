import apiConfig from "../http/apiConfig";

export const UserQueryKey = "users";

// api endpoint
export const ApiEndPoint = {
    LISTS_API: "/users/",
}


//  api config 
export const fetchUserLists = async <R>(page: number, perPage: number): Promise<R> => {
    const res = await apiConfig.get<R>(ApiEndPoint.LISTS_API,{
        params: {
            page: page,
            per_page: perPage,
        },
    });
    return res.data;
};

