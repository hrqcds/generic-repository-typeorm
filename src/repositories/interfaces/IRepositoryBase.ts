import { EntityBase } from "../../entity/Entity";

export interface IQuery<T extends EntityBase> {
  skip: number;
  limit: number;
  order: "ASC" | "DESC";
  orderBy: string;
  filter: Partial<T>;
}

export interface IRepositoryBase<T extends EntityBase> {
  create(entity: T): Promise<T>;
  findAll(q: IQuery<T>, order?: "ASC" | "DESC"): Promise<T[]>;
  findById(id: number): Promise<T | null>;
  update(id: number, entity: T): Promise<void>;
  delete(id: number): Promise<void>;
}
