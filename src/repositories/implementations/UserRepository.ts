import { DataSource, EntitySchema, Repository } from "typeorm";
import { User, UserSchema } from "../../entity/User";
import { RepositoryBase } from "../RepositoryBase";
import { IUserRepository } from "../interfaces/IUserRepository";

export default class UserRepository extends RepositoryBase<User> implements IUserRepository {
    private readonly repository: Repository<User>


    constructor(dataSource: DataSource, entity: EntitySchema<User>) {
        super(dataSource, entity);
        this.repository = dataSource.getRepository(UserSchema)

    }

}