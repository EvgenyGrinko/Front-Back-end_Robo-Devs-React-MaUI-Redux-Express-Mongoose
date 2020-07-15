import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "../components/NavBar/NavBar";
import Search from "../Search/Search";
import { Grid } from "@material-ui/core";
import Content from "../components/Content/Content";
import { connect } from "react-redux";
import { getAllDevelopers, addDeveloper, getAll } from "../redux/actions/index";
import DefInfo from "../components/DevInfo/DevInfo";
import axios from "axios";

const mapDispatchToProps = { getAllDevelopers };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onAddDeveloper: (developer) => {
//       dispatch(addDeveloper(developer))
//     }
//   }
// };

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
    //   const url = "https://jsonplaceholder.typicode.com/users";

    //   axios.get(url).then((res) => {
    //     const developers = res.data;
    //     props.getAllDevelopers(developers);
    //   });
  }

  useEffect(() => {
    callAPI();
  }, []);
  //   useEffect(() => {
  //     setApiResponse(getAll());
  // }, []);

  // console.log(apiResponse);

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
          {/* <Content /> */}
          <DefInfo id={5} />
          <Grid item xs={0} sm={2} />
        </Grid>
      </Grid>
    </div>
  );
}

//https://jsonplaceholder.typicode.com/users
//https://robohash.org/
export default connect(null, mapDispatchToProps)(App);
