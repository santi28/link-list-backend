import path from "node:path";
import { fileURLToPath } from "node:url";
import { DataSource } from "typeorm";

import config from "./config";
import { User } from "../entities/user.entity";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

export default new DataSource({
	applicationName: "link-list-backend",

	// Connection options
	type: "postgres",
	host: config.DATABASE_HOST,
	port: config.DATABASE_PORT,

	// Authentication options
	username: config.DATABASE_USER,
	password: config.DATABASE_PASS,
	database: config.DATABASE_NAME,

	// Database options
	synchronize: true,
	entities: [User],
	migrations: [`${__dirname}/migrations/*.ts`],
});
