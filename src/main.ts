import Elysia from "elysia";
import config from "./config/config";

const elysia = new Elysia();

try {
	elysia.get("/", () => "Hello World!");

	elysia.use(import("./routes/auth.router"));

	elysia.listen(config.PORT);

	console.log(`Server running at ${elysia.server?.url}`);
} catch (error) {
	console.error(error);
	process.exit(1);
}
