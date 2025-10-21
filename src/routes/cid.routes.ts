import type { FastifyInstance } from "fastify";
import { list_cids_controller } from "../controllers/cids/list-cids.controller.js";

async function cid_routes(app: FastifyInstance) {
    app.get("/", list_cids_controller)
}

export { cid_routes }