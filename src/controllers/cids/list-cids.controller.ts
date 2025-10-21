import type { FastifyRequest, FastifyReply } from "fastify";
import * as fs from "fs"

async function list_cids_controller(req: FastifyRequest, reply: FastifyReply) {
    let data = fs.readFileSync('src/data/json/cids.json', 'utf-8')
    data = JSON.parse(data)

    reply.status(200).send({ Cids: data })
}

export { list_cids_controller }