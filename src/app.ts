import fastify from "fastify";
import { app_routes } from "./routes/index.js";

function create_app() {
    const app = fastify()

    app.register(app_routes)
    return app
}

export { create_app }