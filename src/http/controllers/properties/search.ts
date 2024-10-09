import { SearchPropertiesUseCase } from "@/use-cases/search-properties";
import type { FastifyReply, FastifyRequest } from "fastify";

export function search(request: FastifyRequest, reply: FastifyReply) {
	const UseCase = new SearchPropertiesUseCase();

	const response = UseCase.execute();

	return reply.status(200).send(response);
}
