import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Menu,
  MenuItem,
  Typography,
  IconButton,
  Grid,
  Dialog,
  DialogTitle,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

function DevCard(props) {
  const classes = useStyles();
  const [developer, setDeveloper] = useState();
  const [anchorEl, setAnchorEl] = useState(null);
  const [dialogOpened, setDialogVisibility] = useState(false);
  const [menuOpened, setMenuVisibility] = useState(false);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuVisibility(true);
  };

  const handleDeleteClick = () => {
    setDialogVisibility(true);
    setMenuVisibility(false);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuVisibility(false);
  };

  const handleDialogClose = () => {
    setDialogVisibility(false);
  };

  function DeleteDialog() {
    return (
      <Dialog
        onClose={handleDialogClose}
        aria-labelledby="simple-dialog-title"
        open={dialogOpened}
      >
        <DialogTitle id="simple-dialog-title">Are you sure?</DialogTitle>
        <Button variant="contained" color="secondary">
          OK
        </Button>
      </Dialog>
    );
  }

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

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={"https://robohash.org/" + props.id}
          title="Dev Name"
        />
        <CardContent></CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container direction="column">
          <Typography variant="body2" color="textSecondary" component="p">
            Name: {developer ? developer.name.trim() : ""}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Email: {developer ? developer.email : ""}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Phone: {developer ? developer.phone : ""}
          </Typography>
        </Grid>

        <div>
          <IconButton
            aria-label="account of current developer"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={menuOpened}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleDeleteClick} open={menuOpened}>
              Delete
            </MenuItem>
          </Menu>
          <DeleteDialog open={dialogOpened} onClose={handleDialogClose} />
        </div>
      </CardActions>
    </Card>
  );
}

export default DevCard;
