import {
  DataSource,
  EntitySchema,
  FindOptionsWhere,
  Repository,
} from "typeorm";
import { EntityBase } from "../entity/Entity";
import { IQuery, IRepositoryBase } from "./interfaces/IRepositoryBase";

export class RepositoryBase<T extends EntityBase>
  implements IRepositoryBase<T>
{
  private readonly _repository: Repository<T>;

  constructor(dataSource: DataSource, entity: EntitySchema<T>) {
    this._repository = dataSource.getRepository<T>(entity);
  }
  async update(id: number, entity: T): Promise<void> {
    const r = { id, ...entity };
    await this._repository.save(r);
  }
  async delete(id: number): Promise<void> {
    await this._repository.delete(id);
  }
  async findById(id: number): Promise<T | null> {
    return await this._repository.findOneBy({ id } as FindOptionsWhere<T>);
  }

  async create(entity: T): Promise<T> {
    const result = this._repository.create(entity);

    return await this._repository.save(result);
  }
  async findAll({
    skip = 0,
    limit = 10,
    order = "ASC",
    orderBy,
    filter,
  }: IQuery<T>): Promise<T[]> {
    const qb = this._repository.createQueryBuilder();

    Object.entries(filter).forEach(([key, value]) => {
      qb.andWhere(`${key} Like  :${key}`, {
        [key]: `%${value}%`,
      });
    });

    if (skip && limit) {
      qb.skip((skip - 1) * limit).take(limit);
    }

    if (orderBy && order) {
      qb.orderBy(orderBy, order as "ASC" | "DESC");
    }

    return await qb.getMany();
  }
}
