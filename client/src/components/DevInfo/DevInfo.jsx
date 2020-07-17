import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Grid,
  Paper,
  Typography,
  CircularProgress,
  Container,
} from "@material-ui/core";
import { getOneDeveloper } from "../../redux/actions/index";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  spinnerContainer: {
    height: `calc(100vh - ${theme.spacing(8)}px)`,
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
  paper: {
    display: "flex",
    width: theme.spacing(30),
    height: theme.spacing(30),
    padding: theme.spacing(1),
  },
  content: {
    display: "flex",
    width: "100%",
  },
}));

const DevInfo = (props) => {
  const id = Number(props.match.params.id);

  useEffect(() => {
    props.getOneDeveloper(id);
  }, []);
  const classes = useStyles();

  return (
    <div>
      {props.oneDeveloper.name ? (
        <div className={classes.content}>
          <Avatar
            className={classes.avatar}
            src={"https://robohash.org/" + id}
          />
          <Paper elevation={3} className={classes.paper}>
            <Container>
              <Typography component="div">
                email: {props.oneDeveloper.email}
              </Typography>
              <Typography>name: {props.oneDeveloper.name}</Typography>
              <Typography>phone: {props.oneDeveloper.phone}</Typography>
              <Typography>username: {props.oneDeveloper.username}</Typography>
              <Typography>website: {props.oneDeveloper.website}</Typography>
            </Container>
          </Paper>
        </div>
      ) : (
        <div className={classes.spinnerContainer}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = { getOneDeveloper };
function mapStateToProps(state) {
  return { oneDeveloper: state.oneDeveloper };
}

export default connect(mapStateToProps, mapDispatchToProps)(DevInfo);
