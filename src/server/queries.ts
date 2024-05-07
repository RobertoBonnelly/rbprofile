import "server-only";
import { db } from "./db";

export async function getPosts() {
    const posts = await db.query.posts.findMany({
        orderBy:(model, { asc }) => asc(model.id),
      });
      return posts;
}

export async function getPost(id: number) {
  const post = await db.query.posts.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });

  if (!post) throw new Error("Image not found");

  return post;
}