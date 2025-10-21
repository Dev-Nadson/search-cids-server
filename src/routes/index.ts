import type { FastifyInstance } from "fastify";
import { cid_routes } from "./cid.routes.js";

async function app_routes(app: FastifyInstance) {
    app.register(cid_routes)
}

export { app_routes }