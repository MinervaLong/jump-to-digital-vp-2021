import ImgProduct from '../../assets/images/product_image.png';
import DollarIcon from '../../assets/icons/dollar_icon.png';
import useViewPort from '../../hooks/UseViewPort';

const Product = () => {
    const { width } = useViewPort();
    const breakPoint = 1024;
    return (
        <div>
            { width < breakPoint ?
            (<section className='product' aria-label='Product price and image'>
                <div className='product__textWrapper'>
                    <small>New mac</small>
                    <div className='product__priceWrapper'>
                        <img alt='Dollar icon' src={DollarIcon}/>
                        <p>899.00</p>
                    </div>
                </div>
                <figure><img className='product__laptopImg' alt='Laptop product' src={ImgProduct}/></figure>
            </section>)
            :
            (<section className=' product--desktop' aria-label='Product price and image'>
                <div className='product__textWrapper--desktop'>
                    <small>New mac</small>
                    <div className='product__priceWrapper--desktop'>
                        <img className='product__img--dollar' alt='Dollar icon' src={DollarIcon}/>
                        <p>899.00</p>
                    </div>
                </div>
                <figure><img className='product__laptopImg--desktop' alt='Laptop product' src={ImgProduct}/></figure>
            </section>
            )
            }
        </div>        
    )
}

export default Product;
