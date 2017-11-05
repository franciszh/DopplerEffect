import React from "react";

const Planet = ({velocity}) => {

    const planetColor = (velocity) => {
        let saturate = ((Math.abs(velocity)/100+0.2)*4).toFixed(2);
        return (velocity == 0 || velocity>100 || velocity<-100)? {}: velocity > 0 ? 
        {filter:`hue-rotate(335deg) saturate(${saturate})`} : 
        {filter:`hue-rotate(160deg) saturate(${saturate})`};
    }
    
    return (
        <div>
            <img style={planetColor(velocity)} src="./img/star-small.png"/>
        </div>    
    );
}

export default Planet;