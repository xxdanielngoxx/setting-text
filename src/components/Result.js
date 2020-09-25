import React from 'react';

export const Result = (props) => {

    const setStyle = () => {
        return {
            color: props.color,
            borderColor: props.color,
            fontSize: props.fontSize,
        }
    }

    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <p>Color: { props.color } -  Fontsize: {props.fontSize}</p>
            <div id="content" style={ setStyle() }>
                Content Setting
            </div>
        </div>
    )
};

export default Result;
