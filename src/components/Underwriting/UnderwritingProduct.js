/*
 * src/components/Underwriting/Underwriting.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, {Component} from 'react';
import './Underwriting.css';
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

const productTitle = 'Business Underwriting Sponsorship Packages'
const productDesc = 'Want to help your business grow? Underwriting is one of the most cost-effective ways to get the word out about your business.' +
  'Get one of our underwriting packages and have a weekly spot during your favorite show or purchase a block of spots and use them as' +
  'you wish  (Spots will be scheduled on a space available basis.)'
const additionalInfoTitle = 'LEGAL INFORMATION'
const additionalInfoDesc = 'Underwriting agreement announcements will begin upon receipt of payment. KZSC retains complete control over programming and content, and reserves the' +
  'right to pre-empt programming and underwriting announcements in the event of an emergency or pledge drive. Underwriters will be notified as soon as possible of any' +
  'schedule changes affecting underwriter’s announcements. The Underwriter assumes personal responsibility for debts incurred under this contract. The Underwriter is' +
  'presumed to have read, understood and agreed to the terms of this agreement. All underwriting copy is subject to review by KZSC. If copy changes are needed to satisfy' +
  'FCC Rules and Regulations as they pertain to public broadcasting, the underwriter will be contacted and recommendations for changes will be made'


class UnderwritingProduct extends Component{

  constructor(){
    super();
    this.state = { }
  }

  render(){
    return(
      <div className="UnderwritingProduct">
        <Product options={options} productTitle={productTitle} productDesc={productDesc} additionalInfoTitle={additionalInfoTitle} additionalInfoDesc={additionalInfoDesc}/>
      </div>
    );
  }
}

export default UnderwritingProduct;
