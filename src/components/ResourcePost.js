import React from 'react';
import clsx from 'clsx';
import { makeStyles, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography, List, ListItem, ListItemAvatar, ListItemText, TextField, Grid } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { Favorite, Share, ExpandMore, MoreVert, AccountCircle } from '@material-ui/icons';

import postImage from "../images/equations.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    textAlign: "left"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Moment of Inertia Calculations"
        subheader="John Doe - September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={postImage}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, animi maxime eveniet numquam harum quis incidunt accusamus eligendi architecto, aliquid vel rerum quas veritatis dolorum ut fugit atque corporis. Sit.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMore />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography style={{ fontSize: 16 }}>Comments:</Typography>
          <List>
            <ListItem>
              <ListItemAvatar><Avatar>P</Avatar></ListItemAvatar>
              <ListItemText primary="Person 1" secondary="Great work! Thanks for the help. Really appreciated." />
            </ListItem>
            <ListItem>
              <ListItemAvatar><Avatar>P</Avatar></ListItemAvatar>
              <ListItemText primary="Person 1" secondary="Great work! Thanks for the help. Really appreciated." />
            </ListItem>
            <ListItem>
              <ListItemAvatar><Avatar>P</Avatar></ListItemAvatar>
              <ListItemText primary="Person 1" secondary="Great work! Thanks for the help. Really appreciated." />
            </ListItem>
          </List>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item xs={1}>
              <AccountCircle />
            </Grid>
            <Grid item xs={11}>
              <TextField id="input-with-icon-grid" label="Write a comment" size="medium" fullWidth={true} />
            </Grid>
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
}
