## Redux Practice





### Table of contents
[Project structure](#project-structure)

[Installation](#installation)

[Configuration](#configuration)

[Technologies used](#technologies-used)

### Project structure

````
build/
src/
|- index.jsx _______________________________ # Application entry 
|- App.jsx _________________________________ # Application init
|  |- API/ _________________________________ # API  
|    |- Models
|       |- Offer.js ________________________ #Modeling the required data from API
|  |- Assets/ ______________________________ # contain all icons and images
|    |- icons // Icons folder
|  |- Components/ __________________________ # presentational components
|    |- Error/ Error handling
|       |- index.jsx _______________________
|       |- error.scss ______________________ # component styling 
|    |- Offer/ offer view 
|       |- index.jsx _______________________
|       |- offer.scss ______________________ # component styling 
|    |- Search/ search input 
|       |- index.jsx _______________________
|       |- search.scss _____________________ # component styling 
|    |- Sort/ Sorting buttons
|       |- index.jsx _______________________
|       |- sort.scss _______________________ # component styling 
|  |- Containers/ __________________________ # API  
|    |- Offers
|       |- index.jsx _______________________ # Offers component responsable to connect with Redux and parsing the data to the presentational components
|       |- offers.scss _____________________ # component styling 
|  |- Store/ _______________________________ # Redux Store  
|    |- Actions
|       |- offersActions.js ________________ # Redux actions 
|       |- Types.js ________________________ # Redux Types
|    |- Reducers
|       |- offersReducers.js _______________ # Redux reducers 
|       |- index.js ________________________ # Combining redux reducers
|    |- Selectors
|       |- index.js ________________________ # Handling Memoization for offers and sorting



webpack
|- paths.js ________________________________ # webpack paths needed
|- webpack.common.js _______________________ # common webpack config
|- webpack.dev.js __________________________ # development config
|- webpack.prod.js _________________________ # production config      
````


### Installation

1- Clone the boilerplate repo

`git clone git@github.com:HashemKhalifa/redux-practice.git`

2- `yarn` or `npm install` to install npm packages

3- start dev server using `yarn start` or `npm start`.

3- build and bundling your resources for production `yarn build`.

4- Unit testing will watch all your changes in the test files as well as create coverage folder for you. 
`yarn test`


### Configuration
* Webpack Config paths based on your file structure you can go to `webpack/paths.js` and modify the source and file names based on your need.
* `webpack/webpack.common.js` config common webpack for both dev and production environments.
* webpack/webpack.dev.js config webpack for dev environment.
* `webpack/webpack.prod.js` config webpack for production environment.
* `/webpack.config.js` main webpack config that merge common and webpack environment based config.
* Enzyme config `/setupTest.js` here you will have all setup for enzyme to test your component.
* Prettier config `/.prettierc`.
* Browsers list config `/.browserslistrc`.


#### Technologies used


* [Webpack 4](https://github.com/webpack/webpack) 
* [Babel 7](https://github.com/babel/babel) [ transforming JSX and ES6,ES7,ES8 ]
* [React](https://github.com/facebook/react) `16.5`
* [Lodash](https://github.com/lodash/lodash)
* [Redux](https://github.com/reduxjs/redux) State management
* [reselect](https://github.com/reduxjs/reselect) For Memoization functions
* [redux-thunk](https://github.com/reduxjs/redux-thunk)  asynchronous with redux
* [axios](https://github.com/axios/axios) Promise based HTTP client for http requests
* [Eslint](https://github.com/eslint/eslint/) with airbnb config
* [Prettier](https://github.com/prettier/prettier) [ Code formatter ]
* [Style](https://github.com/webpack-contrib/style-loader) & [CSS Loader](https://github.com/webpack-contrib/css-loader) & [SASS-loader](https://github.com/webpack-contrib/sass-loader)
* [CSS modules](https://github.com/css-modules/css-modules) [ Isolated style based on each component ]
* [Browsers list](https://github.com/browserslist/browserslist) [ Share target browsers between different front-end tools, like Autoprefixer, Stylelint and babel-preset-env ]
* [React hot loader](https://github.com/gaearon/react-hot-loader)
* [Webpack dev serve](https://github.com/webpack/webpack-dev-server) 
