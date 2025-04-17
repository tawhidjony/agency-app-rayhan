import { IBaseEntity } from "../base.entity";

export interface ServiceTypesEntity extends IBaseEntity {
        title: string,
        slug: string,
        description: string,
        status: string,
        services: [{id: number, name: string}],
        service_fees: []
}
      