import { DataSource } from "typeorm"
import { User } from "../entity/User"

const AppDataSource = new DataSource({
    entities: [User],
    type: "sqlite",
    database: "db.sqlite",
    synchronize: true,
    logging: true
})

export {
    AppDataSource
}