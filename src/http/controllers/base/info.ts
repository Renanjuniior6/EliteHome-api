import { AppInfoUseCase } from "@/use-cases/app-info";
import type { FastifyReply, FastifyRequest } from "fastify";

export function info(request: FastifyRequest, reply: FastifyReply) {
	
    const UseCase = new AppInfoUseCase

    const response = UseCase.execute()

	return reply.status(200).send(response);
}
