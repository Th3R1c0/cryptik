import Footer from "./footer";
import NavBar from "./nav";


export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}