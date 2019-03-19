import React, {Component} from "react";
import CalendarWeekPart from "../Calendar/CalendarParts/CalendarWeekPart";
import { Grid } from "@material-ui/core";


class Calendar extends Component {
    render(){
        return(
            <div>
            <Grid container spacing={24}>
            <CalendarWeekPart />
            <CalendarWeekPart />
            <CalendarWeekPart />
            <CalendarWeekPart />
            <CalendarWeekPart />
            </Grid>
            </div>
        );
    }
}

export default Calendar;