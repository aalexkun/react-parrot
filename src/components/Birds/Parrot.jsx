import React, {useState} from "react";
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


export default function Parrot(bird) {

    const classes = useStyles();
    const [visible,setBirdVisibility] = useState(bird.visible);

    function toggleVisibility() {
        setBirdVisibility(visible => !visible);
    }


    return (
        <>
            <HelpOutlineOutlinedIcon className={ `${classes.bird_cage} ${ visible ? classes.hidden : classes.visible}` }
                                     onClick={toggleVisibility} >
            </HelpOutlineOutlinedIcon>
            <div className={ `${classes.bird} ${ visible ? classes.visible : classes.hidden}`  }
                 onClick={toggleVisibility} >
                <img src={bird.src}
                     data-src={bird.dataSrc}
                     alt="Parrot">
                </img>
            </div>
        </>
    )


}