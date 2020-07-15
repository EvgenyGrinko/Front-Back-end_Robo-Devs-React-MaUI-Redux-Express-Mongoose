import React, { useEffect } from "react";
import "./App.css";
import NavBar from "../components/NavBar/NavBar";
import Search from "../Search/Search";
import { Grid } from "@material-ui/core";
import Content from "../Content/Content";
import { connect } from "react-redux";
import {getAllDevelopers} from '../redux/actions/index';

const mapDispatchToProps = {getAllDevelopers};

function App(props) {
  // const [apiResponse, setApiResponse] = useState([]);


  async function callAPI() {
    try {
      const url = "https://jsonplaceholder.typicode.com/users";
      const response = await fetch(url);
      const data = await response.json();
      props.getAllDevelopers(data);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    callAPI();
  }, []);

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
          <Content/>
          <Grid item xs={0} sm={2} />
        </Grid>
      </Grid>
    </div>
  );
}

//https://jsonplaceholder.typicode.com/users
//https://robohash.org/
export default connect(null, mapDispatchToProps)(App);
