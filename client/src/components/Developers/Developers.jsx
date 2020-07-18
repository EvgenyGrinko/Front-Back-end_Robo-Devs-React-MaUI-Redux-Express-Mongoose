import React, { useEffect } from "react";
import DevCard from "../DevCard/DevCard";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { getAllDevelopers, setSearchedWord } from "../../redux/actions/index";
import SearchBar from "../SearchBar/SearchBar";
import AddButton from "../AddButton/AddButton";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  seachAddContainer: {
    width: "100%",
    display: "flex",
    padding: theme.spacing(1, 0, 1, 0),
    alignItems: "center",
  },
}));

const Developers = (props) => {
  useEffect(() => {
    props.getAllDevelopers();
  }, []);

  function onSearch(searchedWord){
    setTimeout(()=>{
      props.setSearchedWord(searchedWord);
    }, 2000);
  }

  const classes = useStyles();

  return (
    <Grid container spacing={2} xs={12} sm={8}>
      <Grid item xs={12}>
        <div className={classes.seachAddContainer}>
          <SearchBar onSearch={onSearch}/>
          <Link to="/api/add">
            <AddButton />
          </Link>
        </div>
      </Grid>
      {props.foundDevelopers.map((item) => {
        return (
          <Grid item xs={12} sm={6} md={4}>
            <DevCard info={item} component="form" />
          </Grid>
        );
      })}
    </Grid>
  );
};

const mapDispatchToProps = { getAllDevelopers, setSearchedWord };
function mapStateToProps(state) {
  return { foundDevelopers: state.foundDevelopers};
}

export default connect(mapStateToProps, mapDispatchToProps)(Developers);
