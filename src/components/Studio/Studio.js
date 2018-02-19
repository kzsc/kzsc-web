/*
* src/components/Studio/Studio.js
*
* Copyright (c) 2018-present, KZSC Santa Cruz
* web@kzsc.org
*/

import React, {Component} from 'react';
import Product from '../Product/Product';

const options = [
 { key: 'one', text: '30 min KZSC engineered recording', value: 'thirtyminer' },
 { key: 'two', text: '30 min ISDN - Live - KZSC engineered', value: 'thirtyminISDN' },
 { key: 'three', text: '30 min Self-engineered recording', value: 'thirtyminselfer' },
 { key: 'four', text: '30 min Self-engineered recording - KZSC volunteer', value: 'thirtyminselfvol' }
]
const optionsDescription = {
 thirtyminer: { desc: '30 minute booking. Fully engineered recording by KZSC – We’ll do all the set up and recording', price: '75.00' },
 thirtyminISDN: { desc: '30 minute booking. Live ISDN – Engineered by KZSC. We can offer the G.722 codec, mono 64 kbps, at 48 kHz. Or L3 Dual Mono at the same data rates', price: '75.00' },
 thirtyminselfer: { desc: '30 minute booking. If you have studio skills that we confirm, or have been trained by KZSC, you can run your own recording session for this lower rate', price: '30.00' },
 thirtyminselfvol: { desc: '30 minute booking. This rate is for active KZSC volunteers working on non-KZSC projects', price: '20.00' }
}
const productTitle = 'KZSC Studio Rental'
const productDesc = ''
const additionalInfoTabTitle = 'Description'
const additionalInfoTitle = 'Description'
const additionalInfoDesc =
'<p>KZSC’s studios are quiet, soundproofed, and they kill distracting echoes. We have all-professional gear and processors that sweeten the sound. Your voice or instrumental recording will be rich in '
  + 'frequencies and easy to listen to or edit. We also offer tape-sync and ISDN service for high-quality interview recordings from afar–or live studio-to-studio connections. You can record phone calls, Skype sessions, and other conference calls, too. We bill in 30 minute increments. Please specify any desired dates and times in the '
  + 'comments section of the checkout page so that we can find a mutually agreeable date.</p>'
  + '<h5>KZSC-Engineered rates</h5>'
  + '<ul><li>$75 / half-hour – Fully engineered recording by KZSC – We’ll do all the set up and recording.</li>'
  + '<li>$75 / half-hour – ISDN – Engineered by KZSC</li></ul>'
  + '<p>We can train you! If you book a full hour with a KZSC engineer, then we’ll show you everything you need to learn so that you can use the studios at the lower rate to complete your project. If you want, we’ll even give you some vocal and reading coaching!</p>'
  + '<h5>Self-engineered rates</h5>'
  + '<ul><li>$30 / half hour – Self-engineered studio recording</li>'
  + '<li>$20 / half hour – Self-engineered studio time – for KZSC volunteers</li></ul>'

const image = 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2011/01/radio-mic-e1478641745973.jpg'

class Studio extends Component {

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

export default Studio;
