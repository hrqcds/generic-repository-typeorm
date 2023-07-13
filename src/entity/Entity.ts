import { Column, PrimaryGeneratedColumn } from "typeorm";

export class EntityBase {
    @PrimaryGeneratedColumn()
    public id?: number;
    @Column("datetime")
    public createdAt?: Date = new Date();
    @Column("datetime")
    public updatedAt?: Date = new Date();
}