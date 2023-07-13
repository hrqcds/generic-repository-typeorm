import { Column, Entity, EntitySchema } from "typeorm";
import { EntityBase } from "./Entity";

@Entity()
export class User extends EntityBase {
    @Column("varchar", { length: 100 })
    name: string = "";
    @Column("varchar", { length: 100, unique: true })
    email: string = "";
}

export const UserSchema = new EntitySchema<User>({
    name: "User",
    target: User,
    columns: {
        id: {
            type: String,
            primary: true,
            generated: true
        },
        name: {
            type: String,
            length: 100
        },
        email: {
            type: String,
            length: 100,
            unique: true
        },
        createdAt: {
            type: Date,
            createDate: true
        },
        updatedAt: {
            type: Date,
            updateDate: true
        }
    }
})
