import { EntityBase } from "../../entity/Entity";

export interface IRepositoryBase<T extends EntityBase> {

    create(entity: T): Promise<T>;
    findAll(): Promise<T[]>;
}