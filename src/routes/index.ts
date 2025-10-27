import type { FastifyInstance } from "fastify";
import { data_routes } from "./data.routes.js";

async function app_routes(app: FastifyInstance) {
    app.register(data_routes)
}

export { app_routes }