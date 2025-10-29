import type { FastifyRequest, FastifyReply } from "fastify";
import { list_procedures_repository } from "../repositories/list-procedures.repo.js";
import { querySchema } from "../schemas/page.schema.js";

async function list_procedures_controller(req: FastifyRequest, reply: FastifyReply) {
    const { page, limit, term } = querySchema.parse(req.query)
    const data = await list_procedures_repository({ page, limit, term })
    reply.status(200).send(data)
}

export { list_procedures_controller }