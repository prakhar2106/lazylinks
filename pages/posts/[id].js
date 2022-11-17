import { getAllPostIds, getPostData } from "../../lib/posts";
import links from "../../data/links.json";
import LinkCard from "../../components/linkCard";
import MainCard from "../../components/mainCard";

import Head from "next/head";

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>{postData?.meta?.title || ""}</title>
        <meta name="description" content={postData?.meta?.description || ""} />
        <link rel="icon" href={postData?.meta?.favicon || "/favicon.ico"} />
      </Head>
      <MainCard postData={postData} />
      <div className="linkCardContainer">
        <div className="linkCardGridContainer">
          {links.map((linkData, index) => {
            return <LinkCard data={linkData} key={index}></LinkCard>;
          })}
        </div>
      </div>
    </>
  );
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
