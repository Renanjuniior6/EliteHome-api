import {
	CreatePropertyUseCase,
	type CreatePropertyUseCaseRequest,
} from "@/use-cases/create-property";
import type { FastifyReply, FastifyRequest } from "fastify";

export function create(request: FastifyRequest, reply: FastifyReply) {
    // TODO validar os dados de create das properties
	const UseCase = new CreatePropertyUseCase();

	const response = UseCase.execute(request.body as CreatePropertyUseCaseRequest);

	return reply.status(201).send(response);
}
