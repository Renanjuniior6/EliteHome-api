import { PropertyRepository } from "@/database/repositories/property";
import { SearchPropertiesUseCase } from "@/use-cases/search-properties";
import type { FastifyReply, FastifyRequest } from "fastify";

export async function search(request: FastifyRequest, reply: FastifyReply) {

	const repository = new PropertyRepository()

	const UseCase = new SearchPropertiesUseCase(repository);

	const response = await UseCase.execute();

	return reply.status(200).send(response);
}
