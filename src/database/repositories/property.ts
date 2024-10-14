import { knex } from "@/database";
import type { Property } from "@/entities/property";
import { PropertySchema } from "../schemas/property";

export class PropertyRepository {
	async create(property: Property): Promise<Property> {
		const [createdProperty] = await knex<PropertySchema>("properties")
			.insert({
				name: property.name,
				size: property.size,
				total_value: property.totalValue,
				rent_value: property.rentValue,
				condo_value: property.condoValue,
				tax_value: property.taxValue,
				number_of_rooms: property.numberOfRooms,
				number_of_bathrooms: property.numberOfBathrooms,
				garage_slots: property.garageSlots,
				are_pets_allowed: property.arePetsAllowed,
				is_next_to_subway: property.isNextToSubway,
				is_active: property.isActive,
				description: property.description,
				is_sale: property.isSale,
				is_rent: property.isRent,
				address: property.address,
				latitude: property.latitude,
				longitude: property.longitude,
				is_furnished: property.isFurnished,
			})
			.returning("*");

		const propertyEntity = new PropertySchema(createdProperty).toEntity();

		return propertyEntity;
	}

	async find(): Promise<Property[]> {
		const properties = await knex<PropertySchema>("properties");

		const propertiesEntities = properties.map((property) =>
			new PropertySchema(property).toEntity(),
		);

		return propertiesEntities;
	}
}
