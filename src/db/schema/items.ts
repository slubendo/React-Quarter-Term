import {
  serial,
  text,
  numeric,
  timestamp,
  varchar,
  pgTable,
  pgEnum,
} from "drizzle-orm/pg-core";

export const categoryValues =  [
  "food",
  "games",
  "fitness",
  "stationery",
  "fashion",
  "novelty",
  "home decor",
  "kitchenware",
  "appliances",
  "automotive",
  "toys",
] as const 
export type Category = typeof categoryValues[number]
export const categories = pgEnum("categories",categoryValues);

export const items = pgTable("items", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 50 }).notNull(),
  description: text("description").notNull(),
  price: numeric("price", { precision: 10, scale: 2 }).notNull(),
  category: categories("category").notNull(),
  imageUrl: text("imageUrl").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Item = typeof items.$inferSelect // return type when queried