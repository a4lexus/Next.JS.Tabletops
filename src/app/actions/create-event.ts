"use server";

import { db } from "@/db";
import { events } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import z from "zod";

const EventInsertSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Min length must be more than 3")
    .max(250, "Name is too long, must be under 250"),
  description: z
    .string()
    .trim()
    .min(3, "Min length must be more than 3")
    .max(255, "Too long, must be under 255"),
});

export default async function createEvent(formData: FormData) {
  // "as string" не меняет значение, а только говорит TypeScript, что мы уверены в типе.
  const name = formData.get("name");
  const description = formData.get("description");

  const newEvent = EventInsertSchema.parse({ name, description });
  await db.insert(events).values(newEvent);

  //revalidatePath("/events");
  redirect("/events");
}
