import "reflect-metadata"
import { AppDataSource } from "./database/typeorm"
import UserRepository from "./repositories/implementations/UserRepository"
import { UserSchema } from "./entity/User"



const repository = new UserRepository(AppDataSource, UserSchema)

async function main() {
    await AppDataSource.initialize()


    const r = await repository.create({ email: "email@email.com", name: "usuário" })
    console.log("Create: ", r)
    const rId = await repository.findById(r.id!)
    console.log("FindById: ", rId)
    const list = await repository.findAll()
    console.log("FindAll:")
    console.table(list)
    await repository.update(r.id!, { name: "Teste", email: "Email" })
    const updateList = await repository.findAll()
    console.log("FindAll:")
    console.table(updateList)
    await repository.delete(r.id!)
    const deleteList = await repository.findAll()
    console.log("FindAll:")
    console.table(deleteList)

}

main().then(() => {
    console.log("Done")
})
    .catch((err) => {
        console.error(err)
    })