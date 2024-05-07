import { getPost } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const post = await getPost(props.id);
  return (
  <div className="flex w-full h-full min-w-0">
    <div className="flex-shrink flex items-center justify-center">
        <img src={post.url} className="flex-shrink object-contain" />
    </div>
    <div className="w-48 flex flex-shrink-0 flex-col border-l">
        <div className="text-t1 font-bold">{post.name}</div>
    </div>
    </div>);
}
