const  Button = ({type, value}) => {
    return(
        <div>
            <button type={type} value={value} >Pay<span></span></button>
        </div>
    )
}

export default Button;