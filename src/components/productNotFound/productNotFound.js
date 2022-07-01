import React, { useState } from 'react';
import AddProductInfo from '../addProductInfo';

import BarcodeInputField from '../barcodeInputField';

import './productNotFound.css';

const ProductNotFound = (props) => {
  const { location } = props;

  const [ code ] = useState(new URLSearchParams(location.search).get('code'));
  window.open("https://info-handler.copycrunch1.repl.co/v1/"+code)
  
    return (<div className="productNotFound__container">
      <h2 className="productDisplay__title not-found">Product not found <span role="img" aria-label="crying emoji">😢</span></h2>
      <p>Searching the barcode {code} for excess results!</p>
      <p>You can also enter the barcode below and try again:</p>
      <BarcodeInputField />
      <AddProductInfo />
    </div>)
};

export default ProductNotFound;
