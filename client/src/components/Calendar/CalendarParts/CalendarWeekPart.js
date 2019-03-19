import React, { Component } from 'react';
import CalendarCard from './CalendarCard';
import { Grid } from '@material-ui/core';

class CalendarWeekPart extends Component {
    constructor(props){
        super(props);
        this.state = {dayofweek : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]};
    }
    render(){
        return(
            <div className="weekformat">
            <Grid container spacing={10}>
            <Grid
                container
                direction="row"
                justify="center"
                item xs={12}>
            <CalendarCard day= {this.state.dayofweek[0]} />
            <CalendarCard day= {this.state.dayofweek[1]}/>
            <CalendarCard day= {this.state.dayofweek[2]}/>
            <CalendarCard day= {this.state.dayofweek[3]}/>
            <CalendarCard day= {this.state.dayofweek[4]}/>
            <CalendarCard day= {this.state.dayofweek[5]}/>
            <CalendarCard day= {this.state.dayofweek[6]}/>   
            </Grid>   
            </Grid>
            </div>
        );
    }
}

export default CalendarWeekPart;