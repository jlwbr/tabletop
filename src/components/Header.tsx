import React from "react";

import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    "@global": {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: "none",
      },
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: "wrap",
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
  })
);

function Header() {
  const classes = useStyles();
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          Company name
        </Typography>
        <nav>
          <Link
            component={RouterLink}
            to="/"
            variant="button"
            color="textPrimary"
            href="#"
            className={classes.link}
          >
            Home
          </Link>
          <Link
            component={RouterLink}
            to="/test"
            variant="button"
            color="textPrimary"
            href="#"
            className={classes.link}
          >
            Test
          </Link>
        </nav>
        <Button
          href="#"
          color="primary"
          variant="outlined"
          className={classes.link}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
