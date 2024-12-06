import { z } from "zod";

const envSchema = z.object({
	PORT: z.number().default(3000),

	DATABASE_HOST: z.string().min(1, "Database host is required"),
	DATABASE_PORT: z.number().default(5432),
	DATABASE_USER: z.string().min(1, "Database username is required"),
	DATABASE_PASS: z.string().min(1, "Database password is required"),
	DATABASE_NAME: z.string().min(1, "Database name is required"),
});

const { success, error, data } = envSchema.safeParse(process.env);

if (!success) {
	console.error("Invalid environment variables:", error.format());
	process.exit(1);
}

export default data as Zod.infer<typeof envSchema>;
