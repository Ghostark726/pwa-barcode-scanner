import React, { useState } from 'react';
import AddProductInfo from '../addProductInfo';

import BarcodeInputField from '../barcodeInputField';

import './productNotFound.css';

const ProductNotFound = (props) => {
  const { location } = props;

  const [ code ] = useState(new URLSearchParams(location.search).get('code'));
  
  window.open("https://info-handler.copycrunch1.repl.co/v1/"+code)
  
    return (<div className="productNotFound__container">
      <h2 className="productDisplay__title not-found">In dev<span role="img" aria-label="crying emoji">😢</span></h2>
      <p>Sending information to backend</p>
      <p>You can also enter the barcode below</p>
      <BarcodeInputField />
    </div>)
};

export default ProductNotFound;
