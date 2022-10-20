import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

type LayoutProps = {
  children: JSX.Element;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="pt-[4rem] h-screen pb-[6rem]">{children}</main>
      <Footer />
    </>
  );
};
