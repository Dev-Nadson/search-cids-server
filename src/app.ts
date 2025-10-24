import fastify from "fastify";
import cors from '@fastify/cors';
import { env } from "./libs/environments.js";
import { app_routes } from "./routes/index.js";

function create_app() {
    const app = fastify()
    app.register(cors, { origin: env.ORIGINS, credentials: true })
    app.register(app_routes)
    return app
}

export { create_app }