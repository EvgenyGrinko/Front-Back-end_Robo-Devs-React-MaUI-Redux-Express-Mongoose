import React from "react";
import "./App.css";
import NavBar from "../components/NavBar/NavBar";
import Search from "../Search/Search";
import { Grid } from "@material-ui/core";
import Content from "../Content/Content";

function App() {
  return (
    <div className="App">
      <Grid container direction="column">
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item container>
          <Grid item xs={0} sm={2} />
          <Grid item xs={12} sm={8}>
            <Search />
          </Grid>
          <Grid item xs={0} sm={2} />
        </Grid>
        <Grid item container>
          <Grid item xs={0} sm={2} />
          <Content />
          <Grid item xs={0} sm={2} />
        </Grid>
      </Grid>
    </div>
  );
}

//https://jsonplaceholder.typicode.com/users
//https://robohash.org/
export default App;
