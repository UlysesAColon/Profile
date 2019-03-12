import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NameForm from '../NameForm/NameForm';



const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 64,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12 Blurb</Paper>
        </Grid>
        <br></br>
        <Grid 
        // Be Careful, this might need to be a nested grid
        container
        direction="column"
        justify="center"
        alignItems="stretch"
        item xs={6}>
          <Paper className={classes.paper}>xs=6 Image</Paper>
          <br></br>
          <Paper className={classes.paper}>
            <NameForm />
          </Paper>
          <br></br>
          <Paper className={classes.paper}>xs=6 </Paper>
        </Grid>
        <Grid 
        container
        direction="column"
        justify="center"
        alignItems="stretch"
        item xs={6}>
          <Paper className={classes.paper}>xs=6 
          Carousel needs work
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3 Calculator</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3 State based form data to hold</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3 Video Player</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3 Calendar</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);