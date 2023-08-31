import React from "react";
import { SingleKitten } from "../singleKitten/singleKitten";
import { Kitten } from "../../models/Kitten";

type DisplayKittenPropsType = {
    kittenList: Kitten[];
}

export function DisplayKitten({kittenList}: DisplayKittenPropsType) {
    return (
        <div className="container">
            {kittenList.map((kitten) => {
                return <SingleKitten key={kitten.id} kitten={kitten}/>;
            })}

        </div>
    );
}
