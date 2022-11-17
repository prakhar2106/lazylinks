import { getAllPostIds, getPostData } from "../../lib/posts";
import links from "../../data/links.json";
import LinkCard from "../../components/linkCard";
import MainCard from "../../components/mainCard";
export default function Post({ postData }) {
  return (
    <>
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
