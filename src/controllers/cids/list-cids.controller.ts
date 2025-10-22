import type { FastifyRequest, FastifyReply } from "fastify";
import * as fs from "fs"

const cids = JSON.parse(fs.readFileSync('src/data/json/cids.json', 'utf-8'))

async function list_cids_controller(req: FastifyRequest, reply: FastifyReply) {
    reply.status(200).send(cids)
}

export { list_cids_controller }