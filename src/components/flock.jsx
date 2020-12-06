import React from "react";
import Parrot from "./Birds/Parrot"
import {useBirds} from "./BirdProvider";

import Grid from "@material-ui/core/Grid";




export default function Flock() {

    const {birds} = useBirds();

    return(
        birds.map((bird) => (

                <Grid item >

                    <Parrot key={bird.id} {...bird} >
                    </Parrot>

                </Grid>
            ))

    )

}