import type { FastifyInstance } from "fastify";
import { list_cids_controller } from "../controllers/list-cids.controller.js";
import { list_procedures_controller } from "../controllers/list-procedures.controller.js";
import { list_cids_procedures_controller } from "../controllers/list-cids-procedures.controller.js";

async function data_routes(app: FastifyInstance) {
    app.get("/cids", list_cids_controller)
    app.get("/procedures", list_procedures_controller)
    app.get("/occupations", list_cids_controller)
    app.get("/cids-procedures", list_cids_procedures_controller)
    app.get("/occupatios-procedures", list_cids_controller)
}

export { data_routes }