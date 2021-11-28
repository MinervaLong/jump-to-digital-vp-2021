# JUMP2DIGITAL HACKATHON | Minimalistic checkout

> Front-end challenge for the 2021 Jump2Digital Hackathon. A minimalistic and responsive payment gateway layout with client-side form validation.
## Background

Barcelona Digital Talent have organized a Hackathon with a series of challenges around three tech profiles:

*Frontend
*Backend
*Data

The first phase is online, from 22 to 28 of November. The best 80 participants will participate in a face-to-face competition organized by teams the next 10th December, as part of a tech event with conferences and bussiness meetings, among other activities. More info [here](https://barcelonadigitaltalent.com/jump2digital/)

## Usage

This project use ES6 syntaxis and async/ await pattern with axios to call the API.

```shell
    ...
    # API call
    const getData = async() => {
        setCallError(false)
        try {
        const answer = await axios.get(API_URL);
        const result = answer.data.data
        # Extract the data in variables with map function...
        }catch(error){
        setCallError(true)
        alert('Is something wrong with API call')
        }
    }   
```   

## Stack 

Willing to keep practicing React and trying new libraries combination, I have chosen to built this challenge with:

*[React](https://reactjs.org/) (Hooks)
*[Sass](https://sass-lang.com/)
*[react-icons](https://react-icons.github.io/react-icons/)
*[react-axios](https://www.npmjs.com/package/react-axios)
*[validator](https://github.com/validatorjs/validator.js)
*[Countries & Cities API](shorturl.at/iqM07)

## API/Component

The folder structure is divided in assets, components and hooks with a custom hook for responsiveness using conditional rendering (credits to this [source](https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/).
here the image

-Components are imported to App.js except Button, which is reused twice in PayForm component. 
-The logic is placed in App component and passed to components through props. 
-The list of countries and codes is called from useEffect hook and form validation is coded with vanilla JS, regular expressions and validator.js library inside arrow functions that activate through onChange events.
## Installation

If you want to play with it:

```shell
    # Clone it in your local folder
    git clone https://github.com/MinervaLong/jump-to-digital-vp-2021

    # Install node modules
    cd jump-to-digital-vp-2021
    npm install
```

```shell
    # run command
    npm start
```
## Roadmap and visuals

github pages here
## Contact info

> minervaTest@protonmail.com Vanesa Perea

## Credits

[Dollar icon](https://www.freeiconspng.com/img/3541) by Ahkâm
[Arrow Icon](https://www.iconspedia.com/icon/arrow-left-vector-icon-44399.html) by P. J. Onori
[Apple logo](https://www.freepngimg.com/icon/58796-logo-information-apple-icon-free-hd-image) by FreePNGImg.com
[Macbook image](https://imgpng.ru/download/48852) by imgpng.ru