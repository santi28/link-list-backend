import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";

@Entity()
export class User {
	@PrimaryGeneratedColumn("uuid")
	declare id: number;

	@Column()
	declare name: string;

	@Column()
	declare email: string;

	@CreateDateColumn()
	declare createdAt: Date;

	@UpdateDateColumn()
	declare updatedAt: Date;

	@DeleteDateColumn()
	declare deletedAt: Date;
}
