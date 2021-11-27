
import Redsys from '../../assets/images/redsys_logo.jpg'
import useViewPort from '../../hooks/UseViewPort';

const Footer = () => {
    const  {width}  = useViewPort();
    const breakPoint = 1024;
    return (
        <div>
            {
                width < breakPoint ? 
                (<footer className='footer'>
                    <div className='footer__redsysWrapper'>
                        <p>Powered by</p> 
                        <img alt='Redsys logo' src={Redsys} />
                    </div>
                    <div className='footer__linksWrapper'>
                        <a className='footer__linksWrapper--terms' href='https://en.wikipedia.org/wiki/Contractual_term'>Terms</a>
                        <a className='footer__linksWrapper--priv' href='https://en.wikipedia.org/wiki/Privacy'>Privacy</a>
                    </div>
                </footer>)
             
             :
             
             (<footer className='footer footer--desktop'>
                 <div className='footer__redsysWrapper'>
                    <p>Powered by</p> 
                    <img alt='Redsys logo' src={Redsys} />
                 </div>
                 <pre> | </pre>
                 <div className='footer__linksWrapper'>
                    <a className='footer__linksWrapper--terms' href='https://en.wikipedia.org/wiki/Contractual_term'>Terms</a>
                    <a className='footer__linksWrapper--priv' href='https://en.wikipedia.org/wiki/Privacy'>Privacy</a>
                 </div>
             </footer>) 
            }
        </div>
    )
         
        
        
        
    
}

export default Footer
