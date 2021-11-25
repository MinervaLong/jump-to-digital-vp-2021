import ImgProduct from '../../assets/images/product_image.png'
import DollarIcon from '../../assets/icons/dollar_icon.png'

const Product = () => {
    return (
        <section className='product' aria-label='Product price and image'>
            <div className='product__textWrapper'>
                <small>New mac</small>
                <div className='product__priceWrapper'>
                    <img alt='Dollar icon' src={DollarIcon}/>
                    <p>899.00</p>
                </div>
            </div>
            <figure><img className='product__laptop' alt='Laptop product' src={ImgProduct}/></figure>
        </section>
    )
}

export default Product
