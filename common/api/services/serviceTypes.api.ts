import apiConfig from "@/common/http/apiConfig";

export const ServiceTypesQueryKey = "serviceTypes";

// api endpoint
const ApiEndPoint = {
    LISTS_API: "/service-types/service-types/",
} 

//  api config 
export const fetchServiceTypesList = async <R>(page: number, perPage: number): Promise<R> => {
    const res = await apiConfig.get<R>(ApiEndPoint.LISTS_API,{
        params: {
            page: page,
            per_page: perPage,
        },
    });
    return res.data;
};
