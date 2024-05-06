import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";

async function Posts() {
  const posts = await db.query.posts.findMany({
    orderBy:(model, { asc }) => asc(model.id),
  });
  return(
    <div className="flex flex-wrap gap-1">

        {posts.map((image) => (
          <div key={image.id} className="flex w-48 flex-col" >
            <img src={image.url} alt="image" />
            <div>{image.name}</div>
          </div>
        ))}
        </div>
  );
}

export default async function HomePage() {
  
  return (
    <main className="">
      <SignedOut>
        <div className="w-full h-full text-2xl text-center">Please sign in above</div>
      </SignedOut>
      <SignedIn>
        <Posts />
      </SignedIn>      
    </main>
  );
}
