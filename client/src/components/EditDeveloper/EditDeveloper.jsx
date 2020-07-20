import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, TextField, Button, CircularProgress } from "@material-ui/core";
import { connect } from "react-redux";
import { getOneDeveloper, editDeveloper } from "../../redux/actions/index";

const useStyles = makeStyles((theme) => ({
  spinnerContainer: {
    height: `calc(100vh - ${theme.spacing(8)}px)`,
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

function EditDeveloper(props) {

  const id = props.match.params.id;

  useEffect(() => {
    props.getOneDeveloper(id);
  }, []);

  const {
    currentDeveloper: { developer, success },
  } = props;

  const [edittedDeveloper, setEdittedDeveloper] = useState({
    name: "",
    email: "",
    username: "",
    phone: "",
    avatar: "",
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setEdittedDeveloper((prevValues) => {
      return Object.fromEntries(Object.entries(prevValues).map(([key, prevValue])=>{
        if (key === name) return [key, value]
        if (!prevValue) return [key, developer[key]]
        else return [key, prevValue]
      }))
    })
  }
  function handleSubmit(event) {
    event.preventDefault();
    props.editDeveloper(edittedDeveloper, id);
  }
  const classes = useStyles();
  return (
    <div>
      {success ? (
        <form action="PATCH" onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            defaultValue={developer.name}
            autoFocus
            onChange={handleChange}
          />
          <TextField
            label="Username"
            name="username"
            defaultValue={developer.username}
            onChange={handleChange}
          />
          <TextField
            label="Phone"
            name="phone"
            defaultValue={developer.phone}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            name="email"
            defaultValue={developer.email}
            onChange={handleChange}
          />
          <TextField
            label="Avatar image"
            name="avatar"
            defaultValue={developer.avatar}
          />
          <Button type="submit">
            Submit changes
          </Button>
        </form>
      ) : (
        <div className={classes.spinnerContainer}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return { currentDeveloper: state.currentDeveloper };
}

const mapDispatchToProps = { getOneDeveloper, editDeveloper };

export default connect(mapStateToProps, mapDispatchToProps)(EditDeveloper);
