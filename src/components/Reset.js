import React from 'react'

export const Reset = (props) => {
    return (
        <div>
            <button type="button" className="btn btn-primary mt-3" onClick={() => props.onSettingDefault() }>Reset</button>
        </div>
    )
}

export default Reset;
