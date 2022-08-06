import { FC, Fragment } from "react";
import NavBar from "./NavBar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = (props) => {
  return (
    <Fragment>
      <NavBar />
      <main>{props.children}</main>
    </Fragment>
  );
};
export default Layout;
