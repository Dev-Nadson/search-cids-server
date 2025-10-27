import type { FastifyRequest, FastifyReply } from "fastify";
import { list_procedures_repository } from "../repositories/list-procedures.repo.js";

async function list_procedures_controller(req: FastifyRequest, reply: FastifyReply) {
    try {

        const data = await list_procedures_repository()
        reply.status(200).send(data)

    } catch (err) {

        reply.status(500).send({
            message: "Erro ao carregar os dados",
            data: err
        })

    }
}

export { list_procedures_controller }