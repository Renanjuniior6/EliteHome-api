import { PropertyRepository } from "@/database/repositories/property";
import {
	CreatePropertyUseCase,
	type CreatePropertyUseCaseRequest,
} from "@/use-cases/create-property";
import type { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function create(request: FastifyRequest, reply: FastifyReply) {
	// TODO validar os dados de create das properties

	const schema = z.object({
		name: z.string().min(1).max(255),
		totalValue: z.number().int(),
		numberOfRooms: z.number().int(),
		city: z.string().min(1).max(255),
		state: z.string().length(2), // "length -> vc tem q passar obrigatoriamente 2 caracteres"
		size: z.number(),
	});

	const data = schema.parse(request.body);

	const repository = new PropertyRepository();

	const UseCase = new CreatePropertyUseCase(repository);

	const response = await UseCase.execute(data);

	return reply.status(201).send(response);
}
