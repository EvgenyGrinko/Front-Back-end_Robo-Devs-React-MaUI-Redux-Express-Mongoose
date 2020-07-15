import React, {useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";

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
  const [developer, detDeveloper] = useState();
  const [developerImg, detDeveloperImg] = useState();

  async function callAPI() {
    try {
      const userUrl = "https://jsonplaceholder.typicode.com/users/" + props.id;
      const resUser = await fetch(userUrl);
      const data = await resUser.json();
      detDeveloper(data);

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
        <Typography variant="body2" color="textSecondary" component="p">
          Name: {developer ? developer.name : ""} 
          Email: {developer ? developer.email : ""}
        </Typography>
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}


export default DevCard;
