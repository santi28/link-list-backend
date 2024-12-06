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
	declare email: string;

	@Column()
	declare token: string;

	@Column()
	declare expiresAt: Date;

	@CreateDateColumn()
	declare createdAt: Date;

	@UpdateDateColumn()
	declare updatedAt: Date;

	@DeleteDateColumn()
	declare deletedAt: Date;
}
