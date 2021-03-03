import { Toolbar } from "@material-ui/core";
import * as React from "react";
import NavMenu from "./NavMenu";
import { makeStyles, Container } from "@material-ui/core";

const useStyles = makeStyles({
  contentLayout: {
    height: "100%",
    width: "100%",
    paddingTop: "15px",
  },
});

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;
  const classes = useStyles();
  return (
    <React.Fragment>
      <NavMenu />
      <Toolbar variant="dense" />
      {children && (
        <Container className={classes.contentLayout}>{children}</Container>
      )}
    </React.Fragment>
  );
};

export default Layout;

// export default class Layout extends React.PureComponent<
//   {},
//   { children?: React.ReactNode }
// > {
//   public render() {
//     return (
//       <React.Fragment>
//         <NavMenu />
//         <Toolbar variant="dense" />
//         <div className={classes.contentLayout}>{this.props.children}</div>
//       </React.Fragment>
//     );
//   }
// }
