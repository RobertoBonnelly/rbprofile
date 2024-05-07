import { getPost } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const post = await getPost(props.id);
  return (
  <div className="flex w-full h-full min-w-0">
    <div className="flex flex-shrink items-center justify-center">
        <img src={post.url} className="flex-shrink object-contain" />
    </div>
    
    <div className="flex w-48 flex-shrink-0 flex-col border-l">
        <div className="border-b text-lg text-center">{post.name}</div>
    </div>
    </div>);
}
