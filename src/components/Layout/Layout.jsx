import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

export function Layout({ children, hasBackButton = false, ...rest }) {
  return (
    <>
      <Navbar hasBackButton={hasBackButton} {...rest} />
        {children}
      <Footer/>
    </>
  )

}
