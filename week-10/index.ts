import { Client } from "pg";

// PostgreSQL client configuration
const client = new Client({
    connectionString: "postgresql://postgres:mysecret@localhost:5432/postgres"
});

// Connect to the database
client.connect()
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Connection error', err.stack));

// Function to insert a user into the users table
async function insertUser(username:any, email:string, password:string) {
    try {
        const result = await client.query(`
            INSERT INTO users (username, email, password)
            VALUES ($1, $2, $3)
            RETURNING id, username, email, created_at;
        `, [username, email, password]);

        console.log("User inserted successfully:", result.rows[0]);
    } catch (err: any) {
        console.error("Error inserting user:", err.stack);
    } finally {
        // Close the database connection
        await client.end();
        console.log("Connection closed.");
    }
}

// Call the function to insert a user
insertUser('john_doe', 'john.doe@example.com', 'securepassword');
