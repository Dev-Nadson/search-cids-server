import type { FastifyRequest, FastifyReply } from "fastify";
import { list_occupations_procedures_repository } from "../repositories/occupatios-procedures.repo.js";
import { querySchema } from "../schemas/page.schema.js";

async function list_occupations_procedures_controller(req: FastifyRequest, reply: FastifyReply) {
    try {
        const { page, limit } = querySchema.parse(req.query)
        const data = await list_occupations_procedures_repository({ page, limit })
        reply.status(200).send(data)

    } catch (err) {
        reply.status(500).send({
            message: "Erro ao carregar os dados",
            data: err
        })
    }
}

export { list_occupations_procedures_controller }