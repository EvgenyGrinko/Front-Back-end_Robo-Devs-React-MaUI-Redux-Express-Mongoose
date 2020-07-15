import React from "react";
import DevCard from "../DevCard/DevCard";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { developers: state.developers };
};

const Content = (props) => {

  return (
    <Grid container spacing={2} xs={12} sm={8}>
      {props.developers.map((item) => {
        return (
          <Grid item xs={12} sm={6} md={4}>
            <DevCard id={item.id}/>
          </Grid>
        );
      })}
      {/* <Grid item xs={12} sm={6} md={4}>
        <DevCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <DevCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <DevCard />
      </Grid> */}
    </Grid>
  );
};

export default connect(mapStateToProps)(Content);
