import React, { useEffect } from "react";
import DevCard from "../DevCard/DevCard";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { getAllDevelopers } from "../../redux/actions/index";
import SearchBar from '../SearchBar/SearchBar';

const Developers = (props) => {
  useEffect(() => {
    props.getAllDevelopers();
  }, []);

  return (
    <Grid container spacing={2} xs={12} sm={8}>
      <SearchBar/>
      {props.developers.map((item) => {
        return (
          <Grid item xs={12} sm={6} md={4}>
            <DevCard info={item} component="form" />
          </Grid>
        );
      })}
    </Grid>
  );
};

const mapDispatchToProps = { getAllDevelopers };
function mapStateToProps(state) {
  return { developers: state.developers };
}

export default connect(mapStateToProps, mapDispatchToProps)(Developers);
