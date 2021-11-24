import Redsys from '../../assets/images/redsys_logo.jpg'

const Footer = () => {
    return (
        <section>
            <p>Powered by</p> <img alt='Redsys logo' src={Redsys} width='50px'/>
            <p>|</p>
            <div>
                <a href='https://en.wikipedia.org/wiki/Contractual_term'>Terms</a>
                <a href='https://en.wikipedia.org/wiki/Privacy'>Privacy</a>
            </div>
        </section>
    )
}

export default Footer
