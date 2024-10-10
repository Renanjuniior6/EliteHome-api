import type { PropertyRepository } from "@/database/repositories/property";
import type { Property } from "@/entities/property";

type SearchPropertiesUseCaseResponse = {
	properties: Property[];
};

export class SearchPropertiesUseCase {
	constructor(private repository: PropertyRepository) {}

	async execute(): Promise<SearchPropertiesUseCaseResponse> {
		const properties = await this.repository.find();

		return { properties };
	}
}
