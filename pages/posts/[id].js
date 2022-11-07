import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ postData }) {
  return <div>Hello {postData?.name} - {postData?.meta}</div>;
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
