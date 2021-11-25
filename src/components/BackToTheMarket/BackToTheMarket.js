 import LeftArrow from '../../assets/icons/left_arrow_icon.png'
 
 const BackToTheMarket = () => {
    return (
        <section className='getBack' aria-label='Fake option to take a step back in the payment'>
            <img alt='Left arrow'src={LeftArrow} />
            <p>Back to the market</p>
        </section>
    )
}

export default BackToTheMarket