import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Grid, Button, Paper } from "@material-ui/core";
import InputField from "../AddNewDeveloperForm/InputField/InputField";

const useStyles = makeStyles((theme) => ({
  form: {
    padding: theme.spacing(4),
    display: "flex",
    flexFlow: "column nowrap",
    overflow: "auto",
    flexGrow: 1,
  },
  submitButton: {
    alignSelf: "center",
    width: "50%",
  },
  container: {
    margin: theme.spacing(4, 0, 0, 0),
  },
}));

function AddNewDeveloperForm() {
  const classes = useStyles();
  const [developer, setDeveloper] = useState({
    name: "",
    email: "",
    surname: "",
    phone: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  function handleDeveloperInfo(target) {
    setDeveloper((prevValues) => {
      const name = target.name;
      const value = target.value;
      return { ...prevValues, [name]: value };
    });
  }

  return (
    <Grid container>
      <Grid item xs={false} sm={2} />
      <Grid item xs={12} sm={8}>
        <Paper elevation={3} className={classes.container}>
          <form className={classes.form} action="POST" onSubmit={handleSubmit}>
            <InputField name="name" onChange={handleDeveloperInfo} />
            <InputField name="surname" onChange={handleDeveloperInfo} />
            <InputField name="email" onChange={handleDeveloperInfo} />
            <InputField name="phone" onChange={handleDeveloperInfo} />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submitButton}
            >
              submit
            </Button>
          </form>
        </Paper>
      </Grid>
      <Grid item xs={false} sm={2} />
    </Grid>
  );
}

export default AddNewDeveloperForm;
