import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import DialogDelete from '../DialogDelete/DialogDelete'
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";
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
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
  },
  media: {
    height: 200,
  },
}));

function DevCard(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [dialogOpened, setDialogVisibility] = useState(false);
  const [menuOpened, setMenuVisibility] = useState(false);
  const { info } = props;


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

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link to={`devs/${info.id}`}>
          <CardMedia
            className={classes.media}
            image={"https://robohash.org/" + info.id}
            title="Dev Name"
          />
        </Link>
        <CardContent></CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container direction="column">
          <Typography variant="body2" color="textSecondary" component="p">
            Name: {info.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Email:{info.email} 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Phone: {info.phone}
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
          <DialogDelete open={dialogOpened} onClose={handleDialogClose} />

        </div>
      </CardActions>
    </Card>
  );
}

export default DevCard;
