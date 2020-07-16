import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Grid, Paper, Typography, Container } from "@material-ui/core";
import { getOneDeveloper } from "../../redux/actions/index";
import { connect } from "react-redux";

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
  
  const id = Number(props.match.params.id);

  useEffect(() => {
    props.getOneDeveloper(id);
  }, []);

  const classes = useStyles();
  
  return (
    <Grid container>
      <Avatar
        className={classes.avatar}
        src={"https://robohash.org/" + id}
      />
      <Paper elevation={3} className={classes.paper}>
        <Container>
          <Typography>email: {props.oneDeveloper.email}</Typography>
          <Typography>name: {props.oneDeveloper.name}</Typography>
          <Typography>phone: {props.oneDeveloper.phone}</Typography>
          <Typography>username: {props.oneDeveloper.username}</Typography>
          <Typography>website: {props.oneDeveloper.website}</Typography>
        </Container>
      </Paper>
    </Grid>
  );
};

const mapDispatchToProps = { getOneDeveloper };
function mapStateToProps(state) {
  return { oneDeveloper: state.oneDeveloper };
}

export default connect(mapStateToProps, mapDispatchToProps)(DevInfo);
