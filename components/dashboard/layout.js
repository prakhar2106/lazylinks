import Sidebar from "./sidebar";
import Header from "./header";
export default function Layout({ children }) {
  return (
    <>
      <div className="homeContainer">
        <div className="homelayoutchild0">
          <Sidebar></Sidebar>
        </div>
        <div className="homelayoutchild1">
          <Header></Header>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
