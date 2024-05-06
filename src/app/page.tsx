import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { db } from "~/server/db";
import { getPosts } from "~/server/queries";

async function Posts() {
  const posts = await getPosts();

  return(
    <div className="flex flex-wrap justify-center gap-1">

        {posts.map((image) => (
          <div key={image.id} className="flex h-48 w-48 flex-col" >
            <Image 
              src={image.url} 
              style={{objectFit: "contain"}}
              width={192}
              height={192}
              alt={image.name} />
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
