import React, {useState, useEffect} from 'react';
import './assets/sass/App.scss'
import validator from 'validator';
import axios from 'axios'
import BackToTheMarket from './components/BackToTheMarket/BackToTheMarket'
import Product from './components/Product/Product'
import AppleButton from './components/Button/Button'
import PriceButton from './components/Button/Button'
import Footer from './components/Footer/Footer'
// Images & Icons
import AppleIcon from './assets/icons/apple_logo.png'


const API_URL = 'https://countriesnow.space/api/v0.1/countries/iso';

const App = () => {
  // VALIDATE FORM INPUTS
  const [emailError, setEmailError] = useState('');
  const validateEmail = (value) => {
    let email = value;
    validator.isEmpty(email) ? setEmailError(' ❌ This field cannot be empty') : 
    validator.isEmail(email) ? setEmailError('✅') : setEmailError(' ❌ Enter valid Email');      
  }

  const [cardNumError, setCardNumError] = useState('')
  const validateCardNumber = (value) => {
    // Cards Regular Expression to test
    let amexRegex = /^(?:3[47][0-9]{13})$/;
    let masterRegex = /^(?:5[1-5][0-9]{14})$/;
    let visaRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    let discoverRegex = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;

    let cardNum = value;
    if(cardNum.match(amexRegex)) {
      setCardNumError('Valid American Express');
    }else if(cardNum.match(masterRegex)){
      setCardNumError('Valid Master Card');
    }else if(cardNum.match(visaRegex)){
      setCardNumError('Valid Visa')
    }else if(cardNum.match(discoverRegex)){
      setCardNumError('Valid Discover')
    }else {
      setCardNumError(' ❌ Enter a valid credit card number');
    }    
  }

  const [dateError, setDateError] = useState('')
  const validateDate = (value) => {
    // Input value 
    let expDate = value;
    let expDateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/; 
    // Check if it includes slash
    if(expDateRegex.test(expDate) === false){
      setDateError('❌ Use the MM/YY format')
    }else{
      // Get month & year parts
      let splitExpDate = expDate.split('/');
      let expMonth = splitExpDate[0];
      let expYear = splitExpDate[1];

      // Get today's date month and year
      let today = new Date();
      let thisMonth = today.getMonth() + 1;
      let thisYear = today.getFullYear() % 100; // This division converts to yy format
      
      //Compare the two dates to check if the value introduced is outdated
      if(expYear > thisYear || (expYear === thisYear && expMonth >= thisMonth)){
        setDateError('✅')
      }else{
        setDateError('❌ This date is outdated');
      }
    }
    

    //let expDateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;   
    //validator.isEmpty(date) ? setDateError('❌ This field cannot be empty') :
    //validator.matches(date, expDateRegex) ? setDateError('✅'): setDateError(' ❌ Use the MM/YY format')
  }

  const [cvcError, setCVCError] = useState('')
  const validateCVC = (value) => {
    let cvc = value;
    validator.isEmpty(cvc) ? setCVCError('❌ This field cannot be empty') :
    validator.matches(cvc, /^\d{3,4}$/) ? setCVCError('✅') : setCVCError(' ❌ Enter a valid CVC')
  }
  
  const [nameError, setNameError] = useState('');
  const validateName = (value) => {
    let nameOnCard = value;
    // Check if the name is at least 3 characters, only letters & is not empty
    if(validator.isEmpty(nameOnCard)){
      setNameError(' ❌ This field cannot be empty')
    }
    if(validator.isAlpha(nameOnCard) && validator.isLength(nameOnCard,{min:3, max:50})){
      setNameError('✅');
    }else{
      setNameError('❌ Only letters and at least 3 characters');      
    }
  }

  const handleSubmit = (event) => {
    //event.preventDefault();
    alert('Payment successful!')
  }

  // API CALL TO COUNTRIES & ZIP LIST

    // Variables 
  const [countries, setCountries] = useState([]); 
  const [callError, setCallError] = useState(false)
  const [zip, setZip] = useState('ZIP')

    // Call the data at the beginning
  useEffect(() => {
      getData()
   }, []) 

    // API call
  const getData = async() => {
    setCallError(false)
    try {
      const answer = await axios.get(API_URL);
      const result = answer.data.data
      const countriesArray = result.map((country, index) => {
        const name = country.name;
        const zip = country.Iso2;
        const indx = index
        return {indx, name, zip}
        })
      countriesArray.unshift({indx: countriesArray.length + 1, name:'Select a country', zip:'ZIP'})
      setCountries(countriesArray);
    }catch(error){
      setCallError(true)
      alert('Is something wrong with API call')
    }
  }   
    // Store the options in a variable
  const options = countries.map((option) => {
    return(                 
    <option key={option.indx} value={option.zip}>{option.name}</option>
  )})

    // Asign automatically a ZIP code for every country
  const asignZIP = (e) => {setZip(e.target.value)}

  return (
    <main className='container'>

      {/*BACK TO THE MARKET */}
      <section className='container__component'>
        <BackToTheMarket />
      </section>

      {/* PRODUCT */}
      <section className='container__component'> 
        <Product />
      </section>

      {/* APPLE BUTTON*/}
      <section className='container__component'>
        <AppleButton  
          text = 'Pay'
          icon={AppleIcon}
          iconPresence={true}
          iconStyles={{width: '1.8rem', height: '1.8rem'}} 
          className='appleButton'
          type='submit'
        />
       </section>

      {/* PAYFORM */}
      <section className='container__component' id='PayForm' aria-label='Pay form section'>
        <p className='lineText'><span>Or pay with card</span></p>
          <form className='form' onSubmit={handleSubmit} aria-label='Credit card form'>
            <div className='form__inputWrapper'>
              <label htmlFor='email'>Email</label>
              <input
                id='email'
                className='form--boxShadow'
                type='email'
                name='email'                    
                onChange={(event) => validateEmail(event.target.value)}
              />
              <span>{emailError}</span>
            </div>

            <div className='form__inputWrapper'>    
              <label>Card data</label>

              <div className='inputGroup'>
                <div className='inputGroup__top'>
                  <input
                    id='cardNumber'
                    aria-label='Card number'
                    type='text'
                    name='cardNumber'                    
                    placeholder='1234 1234 1234 1234'
                    onChange={(event) => validateCardNumber(event.target.value)}
                  /> 
                </div>  
              
                <div className='inputGroup__down form--boxShadow'>         
                  <input 
                    id='cardDate'
                    aria-label='Card expiry date' 
                    type='text'
                    name='cardDate'
                    placeholder='MM/YY'                   
                    onChange={(event) => validateDate(event.target.value)}
                  />              
                  <input
                    id='cvc'
                    aria-label='Card CVC'
                    type='text'
                    name='cvc'
                    placeholder='CVC'
                    onChange={(event) => validateCVC(event.target.value)}
                  />
                </div> 
                <span>{cardNumError}</span><span>{dateError}</span><span>{cvcError}</span>                  
              </div>
            </div>

            <div className='form__inputWrapper'>
              <label htmlFor='cardName'>Name on card</label>
              <input
                id='cardName'
                className='form--boxShadow'
                type='text'
                name='cardName'
                onChange = {(event) => validateName(event.target.value)}
              />   
              <span>{nameError}</span>               
            </div>

            <div className='form__inputWrapper'>
              <label>Country or region</label>
              <select className='form__inputWrapper--selectBg'
                id='countryOrRegion'
                aria-label='Select a country' 
                name='country'
                onChange={asignZIP}
                required
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
              <span>{callError}</span>
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
     
      {/* FOOTER */}
      <section className='container__component'>
        <Footer />
      </section>

    </main>
  );
}

export default App;
