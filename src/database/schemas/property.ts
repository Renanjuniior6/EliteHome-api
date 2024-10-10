import { Property } from "@/entities/property";

type PropertySchemaProps = {
	id?: string;
	name: string;
	size: number;
	city: string;
	state: string;
	total_value: number;
	number_of_rooms: number;
	created_at?: string;
	updated_at?: string;
};

export class PropertySchema {
	public id?: string;
	public name: string;
	public size: number;
	public city: string;
	public state: string;
	public total_value: number;
	public number_of_rooms: number;
	public created_at?: string;
	public updated_at?: string;

	constructor({
		name,
		city,
		number_of_rooms,
		size,
		state,
		total_value,
		created_at,
		id,
		updated_at,
	}: PropertySchemaProps) {
		this.id = id;
		this.name = name;
		this.total_value = total_value;
		this.number_of_rooms = number_of_rooms;
		this.city = city;
		this.size = size;
		this.state = state;
		this.created_at = created_at;
		this.updated_at = updated_at;
	}

	public toEntity() { // Vai trasformar em uma entidade / Entiity
		const {
			id,
			name,
			city,
			size,
			state,
			total_value,
			number_of_rooms,
			created_at,
			updated_at,
		} = this;

		return new Property({
			id,
			name,
			size,
			city,
			state,
			numberOfRooms: number_of_rooms,
			totalValue: total_value,
			createdAt: created_at ? new Date(created_at) : undefined,
			updatedAt: updated_at ? new Date(updated_at) : undefined,
		});
	}
}
