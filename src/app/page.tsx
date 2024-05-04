import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = ["https://utfs.io/f/ec29f1b4-88e3-4dfe-a453-bf8c954a1c29-juokf5.jpg",
  "https://utfs.io/f/5f6534e3-b922-4d36-a8c9-4e0c4f70c81c-d8zdrz.jpg",
  "https://utfs.io/f/62dba9a6-c45f-475b-b7fc-884135182627-srdrs6.jpg",
  "https://utfs.io/f/2471a71f-aef0-4791-a791-31f09a84c6d3-iquhvy.jpg",
  "https://utfs.io/f/4345ef6c-1ab9-490d-b695-e42aef2e6763-twrj09.jpg",
  "https://utfs.io/f/19fe1430-ef4e-41d9-9a26-65037effed96-iir3z2.jpg",
  "https://utfs.io/f/44b96113-9125-4b8d-84e6-580439412ceb-8yd80n.jpg",
  "https://utfs.io/f/6918667d-fdd6-4f17-b55f-9c718c95874f-23u9ei.jpg",
  "https://utfs.io/f/68acfca4-d049-47f2-8ee3-9d274c8ba4c0-i2i1wv.jpg",
  "https://utfs.io/f/488e9e98-29bc-4332-8184-a0e93e9ce8a2-vbq7jv.jpg",
];

const mockImages = mockUrls.map((url, index) => ({id:index + 1, url}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);
  
  return (
    <main className="">
      <div className="flex flex-wrap gap-1">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>))}
        {mockImages.map((image, index) => (
          <div key={image.id + "-" + index} className="w-48" >
            <img src={image.url} alt="image" />
          </div>
        ))}
        </div>
      Hello, database in progress
    </main>
  );
}
