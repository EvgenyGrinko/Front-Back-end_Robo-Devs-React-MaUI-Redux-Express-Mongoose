import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Grid, Paper, Typography, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
  paper: {
    display: "flex",
    width: 500,
    height: 500,
    padding: theme.spacing(1),
  },
}));

const DevInfo = (props) => {
  const classes = useStyles();
  const [developer, setDeveloper] = useState();

  async function callAPI() {
    try {
      const userUrl = "https://jsonplaceholder.typicode.com/users/" + props.id;
      const resUser = await fetch(userUrl);
      const data = await resUser.json();
      setDeveloper(data);
    } catch (err) {
      console.log(err.message);
    }
  }
  console.log(developer);
  useEffect(() => {
    callAPI();
  }, []);

  return (
    <Grid container>
      <Avatar
        className={classes.avatar}
        src={"https://robohash.org/" + props.id}
      />
      <Paper elevation={3} className={classes.paper}>
        <Container>
          <Typography>email: {developer ? developer.email : ""}</Typography>
          <Typography>name: {developer ? developer.name : ""}</Typography>
          <Typography>phone: {developer ? developer.phone : ""}</Typography>
          <Typography>
            username: {developer ? developer.username : ""}
          </Typography>
          <Typography>website: {developer ? developer.website : ""}</Typography>
        </Container>
      </Paper>
    </Grid>
  );
};

export default DevInfo;
