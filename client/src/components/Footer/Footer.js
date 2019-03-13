import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
class Footer extends Component {
    render(){
        return(
            <div className='Footer'>
            <Grid container spacing={24}>
                {/* Left side */}
                <Grid
                    container
                    direction="column"
                    justify="center"
                    allignItems="stretch"
                    item xs={6}>
                    <Grid item xs={6}>
                    <h1>Hello x=6</h1>
                    </Grid>
                </Grid>
                    
                {/* Right side */}
                <Grid
                    container
                    direction="column"
                    justify="center"
                    allignItems="stretch"
                    item xs={6}>
                    <Grid item xs={6}>
                    <h1> Yo x=6</h1>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                <div>
                <h1>I am the footer I go all the way accross x=12</h1>
                </div>
                </Grid>
            </Grid>    
            </div>
        );
    }
}
Footer.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default Footer;