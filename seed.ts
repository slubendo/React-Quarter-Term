// import * as fakeDatabase from "./src/fakeDatabase";
import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { items } from "./src/db/schema/items";

import * as dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});

const sql = neon(process.env.MIGRATION_DATABASE_URL!);
export const db = drizzle(sql);

const allItems = fakeDatabase.allItems();
// db.insert(items)
//   .values(allItems)
//   .then(() => console.log("Inserted all items into database."))
//   .catch((err) => console.log(err));
