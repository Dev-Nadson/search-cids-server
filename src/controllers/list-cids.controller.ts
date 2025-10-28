import type { FastifyRequest, FastifyReply } from "fastify";
import { list_cids_repository } from "../repositories/list-cids.repo.js";
import { querySchema } from "../schemas/page.schema.js";

async function list_cids_controller(req: FastifyRequest, reply: FastifyReply) {
    const { page, limit, term } = querySchema.parse(req.query)
    const data = await list_cids_repository({ page, limit, term })
    reply.status(200).send(data)

}

export { list_cids_controller }