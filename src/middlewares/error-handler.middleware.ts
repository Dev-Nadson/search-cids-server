import type { FastifyRequest, FastifyReply } from "fastify";
import { AppError } from "../libs/errors/app.errors.js";
import { ZodError } from "zod";
import z from "zod";

async function error_handler_middleware(error: unknown, req: FastifyRequest, reply: FastifyReply) {
    if (error instanceof ZodError) {
        return reply.status(400).send({
            error: "Dados inválidos",
            issues: z.treeifyError(error)
        })
    }

    if (error instanceof AppError) {
        return reply.status(error.status_code).send({
            error: error.name,
            issues: error.message
        })
    }

    console.error(`Erro sem tratamento: ${error}`)
    return reply.status(500).send({
        error: "Erro interno do servidor"
    })
}

export { error_handler_middleware }