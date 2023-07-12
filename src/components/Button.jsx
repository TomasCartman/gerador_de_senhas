import './Button.css'
import React from 'react'

export default function Button(props) {
    return (
        <div className='label-button'>
            {props.label ? (
                <label className='label'>{props.label}</label>
            ) : false}
            
            <input 
                type={props.type} 
                className={props.className} 
                min={props.min}
                max={props.max}
                value={props.children}
            />
            {props.type === "range" ? (
                <span>4</span>
            ) : false}
        </div>
    )
}