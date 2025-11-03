import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const gameTable = pgTable("games", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull().unique(),
  description: varchar({ length: 255  }).notNull().unique(),
});

// При любых изменениях в этой схеме не забудьте обновить путь к этой схеме в файле drizzle.config.ts
// и выполнить команду для создания миграций: npx drizzle-kit migrate