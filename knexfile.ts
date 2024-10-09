import path from "node:path";

import type { Knex } from "knex";

// const config: Knex.Config = {
// 	client: "postgresql",
// 	connection: {
// 		database: "elitehome",
// 		user: "frost",
// 		password: "frost",
//     port: 5432,
// 	},

const config: Knex.Config = {
	client: "postgresql",
	connection: "postgres://frost:frost@localhost:5432/elitehome",
	pool: {
		min: 2,
		max: 10,
	},
	migrations: {
		tableName: "knex_migrations",
		directory: path.join(__dirname, "src", "database", "migrations"),
	},
};

export default config;
