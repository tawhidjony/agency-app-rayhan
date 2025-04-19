import apiConfig from "@/common/http/apiConfig";

export const SupplierTypesQueryKey = {
    List:"supplierTypesList",
    Create:"supplierTypesCreate",
    Edit:"supplierTypesEdit",
    Update:"supplierTypesUpdate",
    Delete:"supplierTypesDelete",
};
// api endpoint
const ApiEndPoint = {
    LISTS_API: "/supplier-types/",
    CREATE_API: "/supplier-types/",
    Edit_API:(id:number) =>  `/supplier-types/${id}`,
    UPDATE_API:(id:number) =>  `/supplier-types/${id}`,
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

export const fetchSupplierTypesCreate = async <T, R>(data:T): Promise<R> => {
    const res = await apiConfig.post<R>(ApiEndPoint.CREATE_API, data);
    return res.data;
};

export const fetchSupplierTypesSingle = async (id:number)=> {
    const res = await apiConfig.get(ApiEndPoint.Edit_API(id));
    return res.data;
};

export const fetchSupplierTypesEdit = async <T, R>(id:number, data:T): Promise<R> => {
    const res = await apiConfig.put<R>(ApiEndPoint.UPDATE_API(id), data);
    return res.data;
};


  