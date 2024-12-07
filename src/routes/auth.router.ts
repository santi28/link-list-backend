import Elysia from "elysia";

const router = new Elysia({ prefix: "/auth" });

router.post("/login", ({ body }) => {
	return body;
});

router.post("/register", ({ body }) => {
	return body;
});

export default router;
