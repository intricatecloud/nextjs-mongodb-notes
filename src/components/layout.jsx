import TopNavbar from "./navBar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <TopNavbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
