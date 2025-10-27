import type { FastifyInstance } from "fastify";
import { list_cids_controller } from "../controllers/list-cids.controller.js";
import { list_procedures_controller } from "../controllers/list-procedures.controller.js";
import { list_occupations_controller } from "../controllers/list-occupations.controller.js";
import { list_cids_procedures_controller } from "../controllers/list-cids-procedures.controller.js";
import { list_occupations_procedures_repository } from "../repositories/occupatios-procedures.repo.js";

async function data_routes(app: FastifyInstance) {
    app.get("/cids", list_cids_controller)
    app.get("/procedures", list_procedures_controller)
    app.get("/occupations", list_occupations_controller)
    app.get("/cids-procedures", list_cids_procedures_controller)
    app.get("/occupations-procedures", list_occupations_procedures_repository)
}

export { data_routes }