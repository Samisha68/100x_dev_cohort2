"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// PostgreSQL client configuration
const client = new pg_1.Client({
    connectionString: "postgresql://postgres:mysecret@localhost:5432/postgres"
});
// Connect to the database
client.connect()
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Connection error', err.stack));
// Function to insert a user into the users table
function insertUser(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield client.query(`
            INSERT INTO users (username, email, password)
            VALUES ($1, $2, $3)
            RETURNING id, username, email, created_at;
        `, [username, email, password]);
            console.log("User inserted successfully:", result.rows[0]);
        }
        catch (err) {
            console.error("Error inserting user:", err.stack);
        }
        finally {
            // Close the database connection
            yield client.end();
            console.log("Connection closed.");
        }
    });
}
// Call the function to insert a user
insertUser('john_doe', 'john.doe@example.com', 'securepassword');
