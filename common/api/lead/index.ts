import apiConfig from "@/common/http/apiConfig";


const ApiEndPoint = {
    leadList: "/users/",
}

export const fetchLeadList = async <R>(page: number, perPage: number): Promise<R> => {
    const res = await apiConfig.get<R>(ApiEndPoint.leadList,{
        params: {
            page: page,
            per_page: perPage,
        },
    });
    return res.data;
};

export const LeadQueryKey = "users";