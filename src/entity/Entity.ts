import { Column, PrimaryGeneratedColumn } from "typeorm";

export class EntityBase {
    @PrimaryGeneratedColumn()
    id?: number;
    @Column("datetime")
    createdAt?: Date = new Date();
    @Column("datetime")
    updatedAt?: Date = new Date();
}