import { getPost } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const post = await getPost(props.id);
  return (<img src={post.url} className="w-96" />);
}
