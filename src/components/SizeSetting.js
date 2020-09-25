import React from 'react';

export const SizeSetting = (props) => {
    return (
        <div className="card border-warning">
            <div className="card-header bg-warning">
                Size: { props.fontSize }
            </div>
            <div className="card-body">
                <button type="button" className="btn btn-danger m-1" onClick={() => props.onChangeSize(-2)}>Decrease</button>
                <button type="button" className="btn btn-success m-1" onClick={() => props.onChangeSize(2)}>Increase</button>
            </div>
        </div>
    );
}

export default SizeSetting;
