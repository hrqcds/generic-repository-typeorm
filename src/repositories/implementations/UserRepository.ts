import { DataSource, EntitySchema } from "typeorm";
import { User } from "../../entity/User";
import { RepositoryBase } from "../RepositoryBase";
import { IUserRepository } from "../interfaces/IUserRepository";

export class UserRepository extends RepositoryBase<User> implements IUserRepository {
    constructor(dataSource: DataSource, entity: EntitySchema<User>) {
        super(dataSource, entity);
    }

}