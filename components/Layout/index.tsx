import { Navbar } from "../Navbar";

type LayoutProps = {
  children: JSX.Element;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="pt-[4rem]">{children}</main>
    </>
  );
};
