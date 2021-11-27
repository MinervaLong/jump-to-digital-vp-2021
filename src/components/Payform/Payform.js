import AppleButton from '../Button/Button';
import PriceButton from '../Button/Button';
import {VscError} from 'react-icons/vsc';
import {BiCheckCircle} from 'react-icons/bi';
import {RiVisaFill} from 'react-icons/ri';
import {FaCcMastercard, FaCcDiscover, FaCcAmex} from 'react-icons/fa';
import {AiOutlineCreditCard} from 'react-icons/ai'
import AppleIcon from '../../assets/icons/apple_logo.png';

const Payform = ({
    handleSubmit,
    validateEmail,
    emailError,
    validateCardNumber,
    cardNumError,
    validateDate,
    dateError,
    validateCVC,
    cvcError,
    validateName,
    nameError,
    asignZIP,
    options,
    zip,
    callError
}) => {
    return (
     <section className='container__component' id='payForm' aria-label='Pay form section'>
        <AppleButton  
            text = 'Pay'
            icon={AppleIcon}
            iconPresence={true}
            iconStyles={{width: '1.8rem', height: '1.8rem'}} 
            className='appleButton'
            type='submit'
        />
      
         
        <p className='lineText'><span>Or pay with card</span></p>
          <form className='form' onSubmit={handleSubmit}  aria-label='Credit card form'>

            <div className={`form__inputWrapper ${emailError === '' ? 'form__inputWrapper' : emailError === 'Valid email' ? 'input--success': 'input--error'}`}>
              <label htmlFor='email'>Email</label>
              <input
                id='email'
                className='form--boxShadow'
                type='email'
                name='email'                    
                onChange={(event) => validateEmail(event.target.value)}
                required
              />
                <VscError className='errorIcon' size='1rem' />
                <BiCheckCircle className='okIcon' size='1rem'/>
              <small className='errorMessage'>{emailError}</small>
            </div>

            <div className='form__inputWrapper '>    
              <label>Card data</label>

              <div className='inputGroup'>
                <div className={`inputGroup__top ${cardNumError === '' ? 'inputGroup__top' : cardNumError === 'Enter a valid credit card number' ? 'input--error': 'input--success'}`}>
                  <input
                    id='cardNumber'
                    aria-label='Card number'
                    type='text'
                    name='cardNumber'                    
                    placeholder='1234 1234 1234 1234'
                    onChange={(event) => validateCardNumber(event.target.value)}
                    required
                  />
                  <RiVisaFill size='1.5rem' className='visaPos'/>
                  <FaCcMastercard size='1.5rem' color='darkblue'className='masterPos'/>
                  <FaCcAmex size='1.5rem' color='blue' className='amexPos'/>
                  <FaCcDiscover size='1.5rem' color='orange' className='discPos'/>
                  <VscError className='errorIcon' size='1rem' />
                  <BiCheckCircle className='okIcon' size='1rem'/> 
                </div>  
              
                <div className='inputGroup__down form--boxShadow'> 
                    <div className={dateError === '' ? '' : dateError === 'Valid date' ? 'input--successD': 'input--errorD'}>      
                        <input 
                            id='cardDate'                    
                            aria-label='Card expiry date' 
                            type='text'
                            name='cardDate'
                            placeholder='MM/YY'                   
                            onChange={(event) => validateDate(event.target.value)}
                            required
                        /> 
                        <VscError className='errorIconD' size='1rem' />
                        <BiCheckCircle className='okIconD' size='1rem'/> 
                        </div> 
                    <div className={cvcError === '' ? '' : cvcError === 'Valid CVC' ? 'input--successC': 'input--errorC'}>           
                        <input
                            id='cvc'                            
                            aria-label='Card CVC'
                            type='text'
                            name='cvc'
                            placeholder='CVC'
                            onChange={(event) => validateCVC(event.target.value)}
                            required
                        />
                        <AiOutlineCreditCard size='1.5rem' className='cvcPos' />
                        <VscError className='errorIconC' size='1rem' />
                        <BiCheckCircle className='okIconC' size='1rem'/> 
                    </div>                 
                </div> 
                <div className='errorMsgPosition'>
                    <small className={cardNumError === '' ? 'errorMessage' : cardNumError === 'Enter a valid credit card number' ? 'input--error': 'input--success'}>{cardNumError}</small>
                    <small className={dateError === '' ? 'errorMessage' : dateError === 'Valid date' ? 'input--success': 'input--error'}>{dateError}</small>
                    <small className={cvcError === '' ? 'errorMessage' : cvcError === 'Valid CVC' ? 'input--success': 'input--error'}>{cvcError}</small>
                </div>                 
              </div>
            </div>

            <div className={`form__inputWrapper ${nameError === '' ? 'form__inputWrapper input-error' : nameError === 'Valid name' ? 'input--success': 'input--error'}`}>
              <label htmlFor='cardName'>Name on card</label>
              <input
                id='cardName'
                className='form--boxShadow'
                type='text'
                name='cardName'
                onChange = {(event) => validateName(event.target.value)}
                required
              /> 
              <VscError className='errorIcon'  size='1rem' />
              <BiCheckCircle className='okIcon'size='1rem' /> 
              <small className='errorMessage'>{nameError}</small>               
            </div>

            <div className='form__inputWrapper '>
              <label>Country or region</label>
              <select className='form__inputWrapper--selectBg'
                id='countryOrRegion'
                aria-label='Select a country' 
                name='country'
                onChange={asignZIP}
                required={true}
              >{options}</select>
              <input
                id='ZIP'
                className='form--boxShadow'
                value={zip}
                aria-label='ZIP code'
                type='text'
                name='zipCode'
                disabled
              />
              <small className='errorMessage'><VscError className='errorIconC' size='1rem' />{callError}</small>
            </div>

            <PriceButton
              text = 'Pay $899.00'
              textStyles={{fontSize: '15pt', color: `$fontColor`}}
              iconPresence={false}
              className='priceButton'
              type='submit'
              
            />              
          </form>
     </section>
            
    )
}

export default Payform
