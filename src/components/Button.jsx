import './Button.css'

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
                name={props.name}
                onChange={e => props.onChange(e)}
                value={props.children}
            />
            {props.type === "range" ? (
                <span className='range-value'>{props.rangeValue}</span>
            ) : false}
        </div>
    )
}