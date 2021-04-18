import React from 'react';
import './BuildControl.css';

const BuildControl = (props) => {
    return(
        <div className="BuildControl">
            <div className="Label">{props.label}</div>
            <button className="less">less</button>
            <button className="more">more</button>
        </div>

    )

}

export default BuildControl