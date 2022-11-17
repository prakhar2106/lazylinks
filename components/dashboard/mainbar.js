import React from "react";
import { useRouter } from "next/router";
import Home from "./home";

const component = (path) => {
  switch (path) {
    case "/dashboard/new1":
      return <>new1</>;
    case "/dashboard/home":
      return <Home/>;
    case "/dashboard/new2":
        return <>new2</>;
    default:
      return <>hello</>;
  }
};

function MainBar() {
  const router = useRouter();
  console.log(router);
  const { asPath } = router;
  return <>{component(asPath)}</>;
}

export default MainBar;
