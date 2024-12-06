import datasource from "./config/datasource";

try {
	await datasource.initialize();
	console.log("Database connection established");
} catch (error) {
	console.error("Database connection failed:", error);
	process.exit(1);
}
