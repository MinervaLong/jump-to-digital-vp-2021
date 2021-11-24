import ImgProduct from '../../assets/images/product_image.png'
import DollarIcon from '../../assets/icons/dollar_icon.png'

const Product = () => {
    return (
        <section aria-label='Product price and image'>
            <div>
                <small>New mac</small>
                <p><img alt='Dollar icon' src={DollarIcon} width='10px'/>899.00</p>
            </div>
            <img alt='Laptop product' src={ImgProduct} width='400px'/>
        </section>
    )
}

export default Product
