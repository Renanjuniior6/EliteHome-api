import { PropertyRepository } from "@/database/repositories/property";
import { CreatePropertyUseCase } from "@/use-cases/create-property";
import type { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function create(request: FastifyRequest, reply: FastifyReply) {
	// TODO validar os dados de create das properties

	const schema = z.object({
		name: z.string().min(1).max(255),
		size: z.number(),
		totalValue: z.number().int(),
		rentValue: z.number().int(),
		condoValue: z.number().int(),
		taxValue: z.number().int(),
		numberOfRooms: z.number().int(), // "length -> vc tem q passar obrigatoriamente 2 caracteres"
		numberOfBathrooms: z.number().int(),
		garageSlots: z.number().int(),
		arePetsAllowed: z.boolean(),
		isNextToSubway: z.boolean(),
		isActive: z.boolean(),
		description: z.string().max(1000),
		isSale: z.boolean(),
		isRent: z.boolean(),
		address: z.string(),
		latitude: z.number(),
		longitude: z.number(),
		isFurnished: z.boolean(),
	});

	const data = schema.parse(request.body);

	const repository = new PropertyRepository();

	const UseCase = new CreatePropertyUseCase(repository);

	const response = await UseCase.execute(data);

	return reply.status(201).send(response);
}
