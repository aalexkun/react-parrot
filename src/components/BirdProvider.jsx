import React, {createContext,useState, useContext} from "react";
import birdData from "../data/birds.json";


export const ContextBirds = createContext();
export const useBirds = () => useContext(ContextBirds);



export default function BirdProvider({children}) {

    const [birds, setBirds] = useState(birdData);


    const resetBirds = () => setBirds(

        birds.map(bird =>  ({...bird, visible: false}) )
    );


    return (
        <ContextBirds.Provider value={{birds,resetBirds}}>
            {children}
        </ContextBirds.Provider>
    )
}