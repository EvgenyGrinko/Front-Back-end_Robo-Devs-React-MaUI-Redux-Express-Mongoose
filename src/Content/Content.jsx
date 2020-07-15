import React from "react";
import DevCard from "../DevCard/DevCard";
import { Grid } from "@material-ui/core";


const Content = () => {
  return (
    <Grid container spacing={2} xs={12} sm={8}>
      <Grid item xs={12} sm={6} md={4}>
        <DevCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <DevCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <DevCard />
      </Grid>
    </Grid>
  );
};

export default Content;
