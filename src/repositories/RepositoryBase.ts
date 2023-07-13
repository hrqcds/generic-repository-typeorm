import { DataSource, EntitySchema, Repository } from "typeorm";
import { EntityBase } from "../entity/Entity";
import { IRepositoryBase } from "./interfaces/IRepositoryBase";

export class RepositoryBase<T extends EntityBase> implements IRepositoryBase<T> {

    private readonly _repository: Repository<T>;

    constructor(dataSource: DataSource, entity: EntitySchema<T>) {
        this._repository = dataSource.getRepository(entity);
        
    }
    async create(entity: T): Promise<T> {
        const result = this._repository.create(entity)

        return await this._repository.save(result)
    }
    async findAll(): Promise<T[]> {
        return await this._repository.find()
    }
}       