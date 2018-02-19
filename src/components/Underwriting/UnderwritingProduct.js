/*
 * src/components/Underwriting/Underwriting.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, {Component} from 'react';
import Product from '../Product/Product';

const options = [
  { key: 'acpt', text: 'Annual Contract (Prime-Time)', value: 'annualcontractpt' },
  { key: 'acdt', text: 'Annual Contract (Day-Time)', value: 'annualcontractdt' },
  { key: 'qcpt', text: 'Quarterly Contract (Prime-Time)', value: 'quarterlycontractpt' },
  { key: 'qcdt', text: 'Quarterly Contract (Day-Time)', value: 'quarterlycontractdt' },
  { key: 'sixtyspots', text: '60 Spots', value: 'sixtyspots' },
  { key: 'fourtyspots', text: '40 Spots', value: 'fourtyspots' },
  { key: 'twentyspots', text: '20 Spots', value: 'twentyspots' },
  { key: 'pds', text: 'Pledge Drive Special', value: 'pledgedrive' }
]
const optionsDescription = {
  annualcontractpt: { desc: 'Sorry, this product is unavailable. Please choose a different combination', price: '5000.00' },
  annualcontractdt: { desc: 'Sorry, this product is unavailable. Please choose a different combination', price: '4000.00' },
  quarterlycontractpt: { desc: 'Sorry, this product is unavailable. Please choose a different combination', price: '1400.00' },
  quarterlycontractdt: { desc: 'Sorry, this product is unavailable. Please choose a different combination', price: '1250.00' },
  sixtyspots: { desc: 'Sorry, this product is unavailable. Please choose a different combination', price: '600.00' },
  fourtyspots: { desc: 'Sorry, this product is unavailable. Please choose a different combination', price: '400.00' },
  twentyspots: { desc: 'Sorry, this product is unavailable. Please choose a different combination', price: '200.00' },
  pledgedrive: { desc: '26 Underwriting Spots for $350', price: '350.00' }
}
const productTitle = 'Business Underwriting Sponsorship Packages'
const productDesc = 'Want to help your business grow? Underwriting is one of the most cost-effective ways to get the word out about your business. ' +
  'Get one of our underwriting packages and have a weekly spot during your favorite show or purchase a block of spots and use them as ' +
  'you wish  (Spots will be scheduled on a space available basis.)'
const additionalInfoTabTitle = 'Additional Information'
const additionalInfoTitle = 'LEGAL INFORMATION'
const additionalInfoDesc = 'Underwriting agreement announcements will begin upon receipt of payment. KZSC retains complete control over programming and content, and reserves the ' +
  'right to pre-empt programming and underwriting announcements in the event of an emergency or pledge drive. Underwriters will be notified as soon as possible of any ' +
  'schedule changes affecting underwriter’s announcements. The Underwriter assumes personal responsibility for debts incurred under this contract. The Underwriter is ' +
  'presumed to have read, understood and agreed to the terms of this agreement. All underwriting copy is subject to review by KZSC. If copy changes are needed to satisfy ' +
  'FCC Rules and Regulations as they pertain to public broadcasting, the underwriter will be contacted and recommendations for changes will be made '
const image = 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2013/02/Shop-Small.jpeg'

class UnderwritingProduct extends Component{

  constructor(){
    super();
    this.state = { }
  }



  render(){
    return(
      <div className="UnderwritingProduct">
        <Product options={options} optionsDescription={optionsDescription} productTitle={productTitle} productDesc={productDesc} additionalInfoTabTitle={additionalInfoTabTitle} additionalInfoTitle={additionalInfoTitle} additionalInfoDesc={additionalInfoDesc} image={image}/>
      </div>
    );
  }
}

export default UnderwritingProduct;
