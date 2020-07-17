import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
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
  const id = props.match.params.id;
  const {
    oneDeveloper: { developer, success },
  } = props;

  useEffect(() => {
    props.getOneDeveloper(id);
  }, []);
  const classes = useStyles();
  console.log(props);
  return (
    <div>
      {success ? (
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
              <Typography>name: {developer.name}</Typography>
              <Typography>phone: {developer.phone}</Typography>
              <Typography>username: {developer.username}</Typography>
              <Typography>website: {developer.website}</Typography>
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
