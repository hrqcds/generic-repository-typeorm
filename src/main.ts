import "reflect-metadata"
import { AppDataSource } from "./database/typeorm"
import { UserRepository } from "./repositories/implementations/UserRepository"
import { UserSchema } from "./entity/User"



const repository = new UserRepository(AppDataSource, UserSchema)

async function main() {
    await AppDataSource.initialize()

    var r = await repository.create({ email: "email@email.com", name: "usuário" })
    console.log(r)
    var list = await repository.findAll()
    console.table(list)
}

main().then(() => {
        console.log("Done")
    })
    .catch((err) => {
        console.error(err)
    })