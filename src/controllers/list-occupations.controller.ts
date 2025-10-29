import type { FastifyRequest, FastifyReply } from "fastify";
import { list_occupations_repository } from "../repositories/list-occupations.repo.js";
import { querySchema } from "../schemas/page.schema.js";

async function list_occupations_controller(req: FastifyRequest, reply: FastifyReply) {
    const { page, limit, term } = querySchema.parse(req.query)
    const data = await list_occupations_repository({ page, limit, term })
    reply.status(200).send(data)
}

export { list_occupations_controller }