import Link from "next/link";
import { db } from "~/server/db";

export default async function HomePage() {
  const posts = await db.query.posts.findMany({
    orderBy:(model, { asc }) => asc(model.id),
  });
  
  return (
    <main className="">
      <div className="flex flex-wrap gap-1">

        {posts.map((image, index) => (
          <div key={image.id + "-" + index} className="flex w-48 flex-col" >
            <img src={image.url} alt="image" />
            <div>{image.text}</div>
          </div>
        ))}
        </div>
      Hello, database in progress
    </main>
  );
}
