import React from "react";
import { SingleKitten } from "../singleKitten/singleKitten";
import { Kitten } from "../../models/Kitten";

type DisplayKittenPropsType = {
    kittenList: Kitten[];
    updateKitten:(newKitten: Kitten) => void;
    deleteKitten:(id:string) => void;
}

export function DisplayKitten({kittenList, updateKitten, deleteKitten}: DisplayKittenPropsType) {
    return (
        <div className="container">
            {kittenList.map((kitten) => {
                return <SingleKitten 
                    key={kitten.id} 
                    updateKitten={updateKitten}
                    deleteKitten={deleteKitten}
                    kitten={kitten}/>;
            })}
        </div>
    );
}
