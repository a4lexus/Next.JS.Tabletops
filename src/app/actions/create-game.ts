"use server";

import { db } from "@/db";
import { gameTable } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import z from "zod";

const CategoryInsertSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Min length must be more than 3")
    .max(100, "Title is too long, must be under 100"),
  description: z
    .string()
    .trim()
    .min(3, "Min length must be more than 3")
    .max(255, "Too long, must be under 255"),
});

export default async function createGame(formData: FormData) {
  const title = formData.get("title");
  const description = formData.get("description");

  const createGame = CategoryInsertSchema.parse({ title, description });
  await db.insert(gameTable).values(createGame);

  //revalidatePath("games");
  redirect("/playground/games");
}
