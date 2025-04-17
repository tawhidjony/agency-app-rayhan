import apiConfig from "@/common/http/apiConfig";

export const ServiceCategoriesQueryKey = "serviceCategories";

// api endpoint
const ApiEndPoint = {
    LISTS_API: "/service-categories/",
} 
//  api config 
export const fetchServiceCategoryList = async <R>(page: number, perPage: number): Promise<R> => {
    const res = await apiConfig.get<R>(ApiEndPoint.LISTS_API,{
        params: {
            page: page,
            per_page: perPage,
        },
    });
    return res.data;
};
