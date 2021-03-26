import './Room.css';
import React from 'react';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, makeStyles, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import HotelIcon from '@material-ui/icons/Hotel';
import PeopleIcon from '@material-ui/icons/People';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    margin: '20px 5px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function Room({room}) {
  const classes = useStyles();
  const history = useHistory();
  
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>{room.avatar}</Avatar>
        }
        title={room.title}
      />
      <CardMedia
        className={classes.media}
        image={room.imgUrl}
        title={room.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {room.description}
        </Typography>
        <div className="row justify-content-between">
          <CardActions>
            <HotelIcon /> : {room.bed}
            <PeopleIcon /> : {room.capacity}
            <MonetizationOnIcon /> : {room.price}
          </CardActions>
          <Button 
            variant="contained" 
            color="primary" 
            className="mx-1"
            onClick={()=> history.push(`/book/${room.bedType}`)}
          >
            Book
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default Room;
