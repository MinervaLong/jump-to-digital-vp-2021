import React, {useState, useEffect} from 'react';
import './assets/sass/App.scss';
import validator from 'validator';
import axios from 'axios';
import BackToTheMarket from './components/BackToTheMarket/BackToTheMarket';
import Product from './components/Product/Product';
import Payform from './components/Payform/Payform';
import Footer from './components/Footer/Footer'
import useViewPort from './hooks/UseViewPort';


const API_URL = 'https://countriesnow.space/api/v0.1/countries/iso';

const App = () => {
  // RESPONSIVE LAYOUT
  const {width} = useViewPort();
  const breakPoint = 1024;

  // VALIDATE FORM INPUTS
  const [emailError, setEmailError] = useState('');
  const validateEmail = (value) => {
    let email = value; 
    validator.isEmail(email) ? setEmailError('Valid email') : setEmailError('Enter valid Email');      
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
      setCardNumError('Enter a valid credit card number');
    }    
  }

  const [dateError, setDateError] = useState('')
  const validateDate = (value) => {
    // Input value 
    let expDate = value;
    let expDateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/; 
    // Check if it includes slash
    if(expDateRegex.test(expDate) === false){
      setDateError('Use the MM/YY format')
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
        setDateError('Valid date')
      }else{
        setDateError('This date is outdated');
      }
    }    

  }

  const [cvcError, setCVCError] = useState('')
  const validateCVC = (value) => {
    let cvc = value;
    validator.matches(cvc, /^\d{3,4}$/) ? setCVCError('Valid CVC') : setCVCError('Enter a valid CVC')
  }
  
  const [nameError, setNameError] = useState('');
  const validateName = (value) => {
    let nameOnCard = value;
    // Check if the name is at least 3 characters, only letters
    if(validator.matches(nameOnCard, /^[a-zA-Z ]{2,30}$/) && validator.isLength(nameOnCard,{min:3, max:50})){
      setNameError('Valid name');
    }else{
      setNameError('Only letters and at least 3 characters');      
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
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
    { width < breakPoint ? 
    <div className='mobileView'>
      {/*BACK TO THE MARKET */}
      <section className='container__component'>
        <BackToTheMarket />
      </section>

      {/* PRODUCT */}
      <section className='container__component'> 
        <Product />
      </section>

      {/* PAYFORM */}
      <Payform
        handleSubmit={handleSubmit}
        validateEmail={validateEmail}
        emailError={emailError}
        validateCardNumber={validateCardNumber}
        cardNumError={cardNumError}
        validateDate={validateDate}
        dateError={dateError}
        validateCVC={validateCVC}
        cvcError={cvcError}
        validateName={validateName}
        nameError={nameError}
        asignZIP={asignZIP}
        options={options}
        zip={zip}
        callError={callError}
      
      />
     
      {/* FOOTER */}
      <section className='container__component'>
        <Footer />
      </section>
    </div>
    
    :
    
   (<div className='desktopView'> 

     <div className='desktopView__col desktopView__col--left'>
       {/*BACK TO THE MARKET */}
       <section className='container__component'>
        <BackToTheMarket />        
      </section>

      {/* PRODUCT */}
      <section className=''> 
       <Product />
      </section>

       {/* FOOTER */}
       <section className=''>
        <Footer />
      </section>

    </div>

    <div className='desktopView__col desktopView__col--right'>
    
      {/* PAYFORM */}
        <Payform
         handleSubmit={handleSubmit}
         validateEmail={validateEmail}
         emailError={emailError}
         validateCardNumber={validateCardNumber}
         cardNumError={cardNumError}
         validateDate={validateDate}
         dateError={dateError}
         validateCVC={validateCVC}
         cvcError={cvcError}
         validateName={validateName}
         nameError={nameError}
         asignZIP={asignZIP}
         options={options}
         zip={zip}
         callError={callError}  
        />
     
    </div>
    
    </div>)

    }
    </main>
  );
}

export default App;
