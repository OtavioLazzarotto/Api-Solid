import type { FastifyInstance } from "fastify";
import { register } from "./controllers/register-controller";
import { authenticate } from "./controllers/autenticate-controller";

export async function appRoutes(app: FastifyInstance) {
  app.post("/users", register);
  app.post("/sessions", authenticate);
}
