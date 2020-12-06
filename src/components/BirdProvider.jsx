import React, {createContext,useState, useContext} from "react";
import birdData from "../data/birds.json";


export const ContextBirds = createContext();
export const useBirds = () => useContext(ContextBirds);



export default function BirdProvider({children}) {

    const [birds, setBirds] = useState(birdData);

    const flipBird = (ev,clickedBird,visible) => {

        setBirds(
            birds.map(bird => (bird.id === clickedBird.id ? {...bird, visible} : bird))
        );
    }

    const resetBirds = () => setBirds(
        birds.map(bird =>  ({...bird, visible: "OFF"}) )
    );


    return (
        <ContextBirds.Provider value={{birds,flipBird,resetBirds}}>
            {children}
        </ContextBirds.Provider>
    )
}