import { IBaseEntity } from "../base.entity";

export interface ServiceCategoryEntity extends IBaseEntity {
        title: string,
        slug: string,
        parent_id: number,
        description: string,
        status: string,
        parent: string,
        sub_service_categories: string[],
        services: [ { id: number, name: string } ]
}
      