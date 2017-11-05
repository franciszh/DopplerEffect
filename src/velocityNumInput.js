import React from "react";

const VelocityNumInput = ({velocity, onInputUpdate}) => {

    const outputNewVelocity = (velocity) => {
        if(velocity<0){
            return (-0.01*Math.pow(velocity,2)).toFixed(2);
        }
        return velocity;
    }

    const onInputChange = e => {
        if(e.target.value>100 || e.target.value<-100) return;
        onInputUpdate(e.target.value);
    }

    return (
        <div className="input__group">
            <div>
                <input type="number" value={velocity} onChange={e => onInputChange(e)}/>
                <br/>
                <label>Min -100, Max 100</label>
            </div>
            <div>
                <input className="input__range" type="range" min="-100" max="100"  onChange={e=>onInputUpdate(outputNewVelocity(e.target.value))}/>
            </div>
        </div>  
    );

};

export default VelocityNumInput;