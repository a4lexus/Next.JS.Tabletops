import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const gameTable = pgTable("games", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255  }).notNull(),
});

// При любых изменениях сначала меняем/добавляем схему
// генерируем npx drizzle-kit generate  - сгенерирует скрипты в папку drizzle
// мигрируем npx drizzle-kit migrate  -внесет изменения в базу данных

export const events = pgTable("events", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255  }).notNull(),
});