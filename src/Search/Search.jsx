import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
  search: {
    width: "100%",
    backgroundColor: theme.palette.primary.light,
    "&:hover": { backgroundColor: "#7457d5" },
    margin: theme.spacing(2, 0, 2, 0),
    borderRadius: "0.5rem"
  },
  searchIcon: {
    padding: theme.spacing(0.5, 2),
    // height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),
    justifyContent: "flex-start",
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(${theme.spacing(4)}px)`,
    // transition: theme.transitions.create("width"),
    width: "100%",
    // [theme.breakpoints.up("md")]: {
    //   width: "20ch",
    // },
    color: theme.palette.primary.contrastText,
  },
}));

const Search = () => {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );
};

export default Search;
