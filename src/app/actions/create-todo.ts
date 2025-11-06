"use server";
import { db } from "@/db";
import { todos, users } from "@/db/schema";
import { authOptions } from "@/lib/auth/auth-options";
import { eq } from "drizzle-orm";
import { getServerSession } from "next-auth";
import z from "zod";

const insertTodoSchema = z.object({
  title: z.string().min(3, "Too short"),
  description: z.string().min(3, "Too short"),
});
export default async function createTodo(formData: FormData) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user.email) throw new Error("Unauthorized");
  const user = await db.query.users.findFirst({
    where: eq(users.email, session.user.email!),
  });
  const raw = Object.fromEntries(formData.entries());
  const todo = insertTodoSchema.parse(raw);

  if (!user) throw new Error("User not found");
  await db.insert(todos).values({ ...todo, userId: user.id });
}
