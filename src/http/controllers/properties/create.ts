import { PropertyRepository } from "@/database/repositories/property";
import {
	CreatePropertyUseCase,
	type CreatePropertyUseCaseRequest,
} from "@/use-cases/create-property";
import type { FastifyReply, FastifyRequest } from "fastify";

export async function create(request: FastifyRequest, reply: FastifyReply) {
    // TODO validar os dados de create das properties

	const repository = new PropertyRepository()

	const UseCase = new CreatePropertyUseCase(repository);

	const response = await UseCase.execute(request.body as CreatePropertyUseCaseRequest);

	return reply.status(201).send(response);
}
