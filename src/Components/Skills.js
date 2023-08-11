import React from "react";

const Skills=(props)=>{


    return(
        <div className="skills">
            <br></br><hr></hr>
            <h1>{props.name}</h1>
            <p>{props.des}</p>
        </div>

    )
}
export default Skills;