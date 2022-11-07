import { getAllPostIds, getPostData } from "../../lib/posts";
import styles from "../../styles/Profile.module.css";

export default function Post({ postData }) {
  return <div className={styles.maincontainer}>Hello {postData?.name} - {postData?.meta}</div>;
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
