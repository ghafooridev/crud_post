import { NodePgDatabase, drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator"
import { Pool } from "pg";


async function main() {
    try {
        const pool = new Pool({ connectionString: process.env.DB_URL });
        const db: NodePgDatabase = drizzle(pool)
        console.log(process.env.DB_URL)
        console.log('migrating...')

        await migrate(db, { migrationsFolder: "src/db/drizzle" })

        console.log('migration done')

        await pool.end()
    }
    catch (e) {
        console.log(e)
    }
}

main()