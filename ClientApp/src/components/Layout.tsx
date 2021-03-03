import { Toolbar } from "@material-ui/core";
import * as React from "react";
import { Container } from "reactstrap";
import NavMenu from "./NavMenu";

export default class Layout extends React.PureComponent<
  {},
  { children?: React.ReactNode }
> {
  public render() {
    return (
      <React.Fragment>
        <NavMenu />
        <Toolbar variant="dense" />
        <div>{this.props.children}</div>
      </React.Fragment>
    );
  }
}
