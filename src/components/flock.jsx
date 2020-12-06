import React, {useContext} from "react";
import Parrot from "./Birds/Parrot"
import {useBirds} from "./BirdProvider";

import Grid from "@material-ui/core/Grid";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";

import { makeStyles } from '@material-ui/core/styles';

const boxProperties = {
    height: "128px",
    width: "128px",
}
const useStyles = makeStyles((theme) => ({

    bird: {
        ...boxProperties
    },
    bird_cage: {
        ...boxProperties
    },
    visible: {
        display: "block"
    },
    hidden: {
        display: "none"
    }

}));

export default function Flock() {

    const classes = useStyles();
    const {birds,flipBird} = useBirds();


    let parrots = birds.map( item => { return new Parrot(item) })


    return(
        parrots.map((p) => (

                <Grid item >
                    <HelpOutlineOutlinedIcon className={ `${classes.bird_cage} ${( p.isVisible() ? classes.hidden : classes.visible )}` }
                                             onClick={ (ev) => flipBird(ev,p,"ON") }>

                    </HelpOutlineOutlinedIcon>
                    <div className={ `${classes.bird} ${( p.isVisible() ? classes.visible : classes.hidden )}`  }
                         onClick={ (ev) => flipBird(ev,p,"OFF") } >
                        {p.render()}
                    </div>

                </Grid>
            ))

    )

}