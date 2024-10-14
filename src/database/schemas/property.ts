import { Property } from "@/entities/property";

type PropertySchemaProps = {
	id?: string;
	name: string;
	size: number;
	total_value: number;
	rent_value: number;
	condo_value: number;
	tax_value: number;
	number_of_rooms: number;
	number_of_bathrooms: number;
	garage_slots: number;
	are_pets_allowed: boolean;
	is_next_to_subway: boolean;
	is_active: boolean;
	description: string;
	is_sale: boolean;
	is_rent: boolean;
	address: string;
	latitude: number;
	longitude: number;
	is_furnished: boolean;
	created_at?: string;
	updated_at?: string;
};

export class PropertySchema {
	public id?: string;
	public name: string;
	public size: number;
	public total_value: number;
	public rent_value: number;
	public condo_value: number;
	public tax_value: number;
	public number_of_rooms: number;
	public number_of_bathrooms: number;
	public garage_slots: number;
	public are_pets_allowed: boolean;
	public is_next_to_subway: boolean;
	public is_active: boolean;
	public description: string;
	public is_sale: boolean;
	public is_rent: boolean;
	public address: string;
	public latitude: number;
	public longitude: number;
	public is_furnished: boolean;
	public created_at?: string;
	public updated_at?: string;

	constructor(props: PropertySchemaProps) {
		this.id = props.id;
		this.name = props.name;
		this.total_value = props.total_value;
		this.number_of_rooms = props.number_of_rooms;
		this.size = props.size;
		this.created_at = props.created_at;
		this.updated_at = props.updated_at;
		this.rent_value = props.rent_value;
		this.condo_value = props.condo_value;
		this.tax_value = props.tax_value;
		this.number_of_bathrooms = props.number_of_bathrooms;
		this.garage_slots = props.garage_slots;
		this.are_pets_allowed = props.are_pets_allowed;
		this.is_next_to_subway = props.is_next_to_subway;
		this.is_active = props.is_active;
		this.description = props.description;
		this.is_sale = props.is_sale;
		this.is_rent = props.is_rent;
		this.address = props.address;
		this.latitude = props.latitude;
		this.longitude = props.longitude;
		this.is_furnished = props.is_furnished
	}

	public toEntity() {
		// Vai trasformar em uma entidade / Entiity

		return new Property({
			id: this.id,
			name: this.name,
			size: this.size,
			numberOfRooms: this.number_of_rooms,
			totalValue: this.total_value,
			rentValue: this.rent_value,
			condoValue: this.condo_value,
			taxValue: this.tax_value,
			numberOfBathrooms: this.number_of_bathrooms,
			garageSlots: this.garage_slots,
			arePetsAllowed: this.are_pets_allowed,
			isNextToSubway: this.is_next_to_subway,
			isActive: this.is_active,
			description: this.description,
			isSale: this.is_sale,
			isRent: this.is_rent,
			address: this.address,
			latitude: this.latitude,
			longitude: this.latitude,
			isFurnished: this.is_furnished,
			createdAt: this.created_at ? new Date(this.created_at) : undefined,
			updatedAt: this.updated_at ? new Date(this.updated_at) : undefined,
		});
	}
}
