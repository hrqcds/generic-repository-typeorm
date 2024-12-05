import "reflect-metadata";
import { AppDataSource } from "./database/typeorm";
import UserRepository from "./repositories/implementations/UserRepository";
import { UserSchema } from "./entity/User";

const repository = new UserRepository(AppDataSource, UserSchema);

async function main() {
  await AppDataSource.initialize();

  const query = {
    skip: 1,
    limit: 10,
    order: "DESC" as "ASC" | "DESC",
    orderBy: "name",
    filter: {
      email: "email",
    },
  };

  const r = await repository.create({
    email: "email10@email.com",
    name: "usuário10",
  });
  console.log("Create: ", r);
  const rId = await repository.findById(r.id!);
  console.log("FindById: ", rId);
  const list = await repository.findAll(query);
  console.log("FindAll:");
  console.table(list);
  await repository.update(r.id!, { name: "Teste", email: "Email" });
  const updateList = await repository.findAll(query);
  console.log("FindAll:");
  console.table(updateList);
  await repository.delete(r.id!);
  const deleteList = await repository.findAll(query);
  console.log("FindAll:");
  console.table(deleteList);
}

main()
  .then(() => {
    console.log("Done");
  })
  .catch((err) => {
    console.error(err);
  });
