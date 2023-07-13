import { DataSource, EntitySchema, FindOptionsWhere, FindOptionsWhereProperty, Repository } from "typeorm";
import { EntityBase } from "../entity/Entity";
import { IRepositoryBase } from "./interfaces/IRepositoryBase";

export class RepositoryBase<T extends EntityBase> implements IRepositoryBase<T> {

    private readonly _repository: Repository<T>;

    constructor(dataSource: DataSource, entity: EntitySchema<T>) {
        this._repository = dataSource.getRepository<T>(entity);

    }
    async update(id: number, entity: T): Promise<void> {
        const r = { id, ...entity }
        await this._repository.save(r)
    }
    async delete(id: number): Promise<void> {
        await this._repository.delete(id)
    }
    async findById(id: number): Promise<T | null> {
        return await this._repository.findOneBy({ id } as FindOptionsWhere<T>)
    }

    async create(entity: T): Promise<T> {
        const result = this._repository.create(entity)

        return await this._repository.save(result)
    }
    async findAll(): Promise<T[]> {
        return await this._repository.find()
    }
}       