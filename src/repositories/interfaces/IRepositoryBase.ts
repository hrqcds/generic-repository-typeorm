import { EntityBase } from "../../entity/Entity";

export interface IRepositoryBase<T extends EntityBase> {

    create(entity: T): Promise<T>;
    findAll(): Promise<T[]>;
    findById(id: number): Promise<T | null>
    update(id: number, entity: T): Promise<void>;
    delete(id: number): Promise<void>;

}