import { db, collection, getDocs } from "../utils/firebase";
export async function getAllPostIds() {
  const lazylinksusers = collection(db, "lazylinks");
  const users = await getDocs(lazylinksusers);
  return users.docs.map((doc) => {
    return { params: { id: doc.data().id } };
  });
}

export async function getPostData(id) {
  const lazylinksusers = collection(db, "lazylinks");
  const users = await getDocs(lazylinksusers);
  console.log('users',users)
  const data = users.docs.filter((doc) => {
    return doc.data().id.toString() === id.toString();
  });
  return {
    id,
    ...data[0]?.data(),
  };
}
