import type { PropertyRepository } from "@/database/repositories/property";
import { Property } from "@/entities/property";

export type CreatePropertyUseCaseRequest = {
	name: string;
	size: number;
	totalValue: number;
	rentValue: number;
	condoValue: number;
	taxValue: number;
	numberOfRooms: number;
	numberOfBathrooms: number;
	garageSlots: number;
	arePetsAllowed: boolean;
	isNextToSubway: boolean;
	isActive: boolean;
	description: string;
	isSale: boolean;
	isRent: boolean;
	address: string;
	latitude: number;
	longitude: number;
	isFurnished: boolean;
};

type CreatePropertyUseCaseResponse = {
	property: Property;
};

export class CreatePropertyUseCase {
	constructor(private repository: PropertyRepository) {} // Hackzin para pegar o repository

	async execute(
		data: CreatePropertyUseCaseRequest,
	): Promise<CreatePropertyUseCaseResponse> {
		const property = new Property(data);

		const createdProperty = await this.repository.create(property);

		return { property: createdProperty };
	}
}
