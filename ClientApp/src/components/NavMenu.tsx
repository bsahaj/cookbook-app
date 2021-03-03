import * as React from "react";
import { Link } from "react-router-dom";
import "./NavMenu.css";
import { Kitchen as KitchenIcon } from "@material-ui/icons";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Avatar,
  withStyles,
  Menu,
  Button,
} from "@material-ui/core";

/*
tan:          #fdefe2 
dark blue:    #1d245c
light blue:   #79c1f1
light grey: 	#f3f3f3 
*/

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    background: "#1d245c",
  },
  toRow: {
    display: "flex",
    flexDirection: "row",
    padding: "2px 2px 2px 2px",
    alignItems: "center",
  },
  link: {
    color: "#fdefe2",
    "&:hover": {
      color: "#79c1f1",
      textDecoration: "none",
    },
  },
});

const UserMenu: React.FC = () => {
  return (
    <Button style={{ background: "#fdefe2", color: "#1a245c" }}>Login</Button>
  );
};

const NavMenu: React.FC = () => {
  const classes = useStyles();
  return (
    <header>
      <AppBar>
        <Toolbar variant="dense" className={classes.toolbar}>
          <div className={classes.toRow}>
            <Typography>cookbook</Typography>
            <KitchenIcon />
          </div>
          <div className={classes.toRow}>
            <Link
              className={classes.link}
              to="/search"
              style={{ marginRight: "15px" }}
            >
              Search
            </Link>
            <Link
              style={{ marginRight: "20px" }}
              className={classes.link}
              to="/counter"
            >
              My Cookbooks
            </Link>
            <UserMenu />
          </div>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default NavMenu;

// export default class NavMenu extends React.PureComponent<
//   {},
//   { isOpen: boolean }
// > {
//   public state = {
//     isOpen: false,
//   };

//   public render() {
//     return (
//       <header>
//         <Navbar
//           className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3"
//           light
//         >
//           <Container>
//             <NavbarBrand tag={Link} to="/">
//               cookbook
//             </NavbarBrand>
//             <KitchenIcon />
//             <NavbarToggler onClick={this.toggle} className="mr-2" />
//             <Collapse
//               className="d-sm-inline-flex flex-sm-row-reverse"
//               isOpen={this.state.isOpen}
//               navbar
//             >
//               <ul className="navbar-nav flex-grow">
//                 <NavItem>
//                   <NavLink tag={Link} className="text-dark" to="/">
//                     Home
//                   </NavLink>
//                 </NavItem>
//                 <NavItem>
//                   <NavLink tag={Link} className="text-dark" to="/counter">
//                     Counter
//                   </NavLink>
//                 </NavItem>
//                 <NavItem>
//                   <NavLink tag={Link} className="text-dark" to="/fetch-data">
//                     Fetch data
//                   </NavLink>
//                 </NavItem>
//               </ul>
//             </Collapse>
//           </Container>
//         </Navbar>
//       </header>
//     );
//   }

//   private toggle = () => {
//     this.setState({
//       isOpen: !this.state.isOpen,
//     });
//   };
// }
