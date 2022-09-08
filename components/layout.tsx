import Footer from "./footer/footer";
import Navbar from "./header/navbar";

export default function Layout({children}) {
  return (<>
    <Navbar></Navbar>
      <main>{children}</main>
    <Footer></Footer>
  </>)
}