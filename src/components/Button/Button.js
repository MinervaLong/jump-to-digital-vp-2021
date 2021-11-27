

const  Button = ({
    type,
    text,
    className,
    textStyles,
    icon,
    iconPresence,
    iconStyles,
    animated
}) => {
    
    return(
        <button 
            type={type}
            className={`${className} btn`}
        >
        {iconPresence === true ?
            <div className='btn__wrapper'>
                <img alt='Apple Payment' src={icon} style={{...iconStyles}} /><span style={{...textStyles}}>{text}</span>
            </div> 
            :
            <span style={{...textStyles}}>{text}</span>     
            }
        </button>       
    )
}

export default Button;