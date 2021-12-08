import React from 'react'
import './Loading.css'

export const Loading = () => {
    return (
        <div className="gooey">
            <span className="dot"></span>
            <div className="dots" >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
