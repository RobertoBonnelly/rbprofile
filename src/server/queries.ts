import "server-only";
import { db } from "./db";

export async function getPosts() {
    const posts = await db.query.posts.findMany({
        orderBy:(model, { asc }) => asc(model.id),
      });
      return posts;
}
