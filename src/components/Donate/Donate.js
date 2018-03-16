/*
 * src/components/Donate/Donate.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, { Component } from 'react';
import { Button, Form, Select, Grid, List, Image, Segment } from 'semantic-ui-react';
import StripeCheckout from 'react-stripe-checkout';
import './Donate.css';
import shirt from './kzsc-shirt.jpg';
import shirt2 from './kzsc-shirt-50th.jpg';
import bag from './kzsc-bag.jpg';
import buttons from './kzsc-buttons.jpg';
import donate from './donate-img.jpg';
import TopMenuBar from '../TopMenuBar/TopMenuBar'

/* Donate Product BEGIN */
const optionsItems = [
 { key: '88.1', text: '88.1 FM', value: 'eightyeight' },
 { key: 'daily-fiddy', text: 'Fiddy', value: 'fiddy' },
 { key: 'buck-a-day', text: 'Buck-a-day', value: 'buckaday' },
 { key: '50-years-of-kzsc', text: '50 years of KZSC', value: 'fiftyyears' },
 { key: 'kzsc-sustainer', text: 'KZSC Sustainer', value: 'kzscsustainer' },
 { key: 'other', text: 'Give What You Can', value: 'other' }
]
const optionsDescription = {
 eightyeight: { desc: 'Celebrate 88.1 FM -- 20,000 watts of good will', price: '88.10' },
 fiddy: { desc: 'Fund next 50 years of Student-run Community Radio, with a daily "Fiddy" cents', price: '182.50' },
 buckaday: { desc: 'Put a Susan B Anthony in the slot every day to keep the KZSC Jukebox jumping!', price: '365.00' },
 fiftyyears: { desc: 'Celebrate 50 years of Student-Run Community Radio with a monthly donation of $50', price: '600.00' },
 kzscsustainer: { desc: 'Celebrate KZSC FM with a monthly donation of $88.10', price: '1057.20' },
 other: { desc: 'What value has KZSC brought into your life?', price: '' }
}
/* Donate Product END */

const sizes = [
  { key: 's', text: 'Small', value: 'small' },
  { key: 'm', text: 'Medium', value: 'medium' },
  { key: 'l', text: 'Large', value: 'large' },
  { key: 'xl', text: 'X-Large', value: 'x-large' },
  { key: '2xl', text: '2XL', value: '2x-large' }
];

const productDesc = [
  {
    key: 'shirt', header: 'KZSC 88 point 1 Tee',
    img:{shirt}, price: 25,
    desc: "KZSC’s newest tee shirt is a nod to a legendary college radio station in NYC that provided early exposure for what became some of the biggest names in hip-hop. Our shirt is printed on a 50/50 blend modern-style shirt that won’t shrink, if you treat it well. So you’ll look great and feel comfortable when you represent KZSC, the Monterey Bay’s most unique station."
  },
  {
    key: 'shirt2', header: 'KZSC 50th Anniversary t-shirt',
    img:{shirt2}, price: 25,
    desc: "KZSC’s newest tee shirt is a nod to a legendary college radio station in NYC that provided early exposure for what became some of the biggest names in hip-hop. Our shirt is printed on a 50/50 blend modern-style shirt that won’t shrink, if you treat it well. So you’ll look great and feel comfortable when you represent KZSC, the Monterey Bay’s most unique station."
  },
  {
    key: 'bag', header: 'KZSC Canvas Tote Bag',
    img:{bag}, price: 30,
    desc: "One of KZSC’s most enduring and popular designs, the “PEEL SLOWLY AND SEE” Banana Slug was inspired by Andy Warhol’s cover design for the debut LP by The Velvet Underground. Now KZSC offers a revamp of the design on this sturdy canvas tote bag designed to haul LPs, groceries, or whatever you please.  Its 15.5″ x 14.5″ x 7″ roomy design is topped off with generous 11 inch handles for over-the-shoulder style."
  },
  {
    key: 'buttons', header: 'KZSC Buttons',
    img:{buttons}, price: 20,
    desc: "Love the Great 88? Grab some KZSC buttons for your hat, shirt, jacket or backpack! Donate a minimum of $10 and receive three unique KZSC buttons, handmade by your favorite DJs. These are 1 inch buttons, protected from the elements with a plastic cover. The pin on the back is also removable in case you’d prefer to make your button a magnet — simply add a magnet to the backside! Some DJs have made pins specific to their show! If you donate during a program that has made specialty pins, we will give you a pin featuring that show’s design in one of the three you receive."
  }
];

class Donate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "donate",
      donateDesc: "Celebrate 88.1 FM -- 20,000 watts of good will",
      amount: 8810,
      merchAmount: 0,
      items: [],
      activeMenuItem: 'donate',
      menuItems: [
        { name: 'donate', title: 'Donate' },
        { name: 'merch', title: 'Merchandise' }
      ],
      donateHeader: 'Help us keep noncommercial community radio on the air with a secure pledge today!',
      activeDonateButton: 'eightyeight',
      donateAmounts: [],
      optionDescription: "Please choose an option to learn more about it",
      itemprice: '0.00',
      donationEditable: false
    }
  }

  componentWillMount() {
    this.setState({
      donateAmounts: [
        {id: "88.1", key: "eightyeight", title: "88.1 FM"},
        {id: "daily-fiddy", key: "fiddy", title: 'Daily "Fiddy"'},
        {id: "buck-a-day", key: "buckaday", title: "Buck-a-day"},
        {id: "50-years-of-kzsc", key: "fiftyyears", title: "50 years of KZSC"},
        {id: "kzsc-sustainer", key: "kzscsustainer", title: "KZSC Sustainer"},
        {id: "other", key: "other", title: "Other"}
      ]
    })
  }

  onToken = (token) => {
    var dAmount = 0;
    if(this.state.content === "donate"){
      dAmount = this.state.amount;
    } else{
      dAmount = this.state.merchAmount;
    }
    console.log(token);
    fetch('/payment', {
      method: 'POST',
      headers: new Headers({'content-type': 'application/json'}),
      body: JSON.stringify({
          rtoken: token,
          amount: dAmount
      })
    }).then(response => {
      // Return back to user, redirect to another webpage?
    })
  }

  toggle(value) {
    if (value !== this.state.content) {
      this.setState({
        content: value
      })
    }
  }

  showDesc(e, req, id) {
    this.setState({ activeDonateButton: id })
    e.preventDefault();
    switch (req) {
      case '88.1':
        this.setState({
          donateDesc: "Celebrate 88.1 FM -- 20,000 watts of good will",
          amount: 8810
        })
        break;
      case 'daily-fiddy':
        this.setState({
          donateDesc: "Fund next 50 years of Student-run Community Radio, with a daily \"Fiddy\" cents",
          amount: 18250
        })
        break;
      case 'buck-a-day':
        this.setState({
          donateDesc: "Put a Susan B Anthony in the slot every day to keep the KZSC Jukebox jumping!",
          amount: 36500
        })
        break;
      case '50-years-of-kzsc':
        this.setState({
          donateDesc: "Celebrate 50 years of Student-Run Community Radio with a monthly donation of $50",
          amount: 60000
        })
        break;
      case 'kzsc-sustainer':
        this.setState({
          donateDesc: "Celebrate KZSC FM with a monthly donation of $88.10",
          amount: 105720
        })
        break;
      case 'other':
        this.setState({
          donateDesc: "Donate what you can!",
          amount: 0.00
        })
        break
      default:
        console.log("Nothing selected");
        break;
    }
  }

  /* Get item description */
  getItem(value){
    for(let i = 0; i < productDesc.length; i++){
      if(value === productDesc[i].key){
        return productDesc[i];
      }
    }
  }

  /* Check that the current item selected is not already in cart */
  notinCart(arr, value){
    if(arr.length !== 0){
      for(let i = 0; i < arr.length; i++){
        if(arr[i].id === value ){
            return false;
        }
      }
    }
    return true;
  }

  /* Add item to the cart */
  addToCart(value){
    let arr = this.state.items;
    let item = this.getItem(value);
    if(this.notinCart(arr, value)){
      arr.push({ id: item.key, header: item.header, img: item.img, price: item.price, desc: item.desc});
      this.setState({
        items: arr
      })
      this.setState({
        merchAmount: this.state.merchAmount + item.price * 100
      });
    }
  }

  /* Remove item from cart */
  removeItem(value){
    let arr = this.state.items;
    let itemPrice = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr[i].id === value){
        itemPrice = arr[i].price;
        arr.splice(i, 1);
      }
    }
    this.setState({
      items: arr,
      merchAmount: this.state.merchAmount - itemPrice *100
    })
  }

  donateButtons() {
    let buttons = this.state.donateAmounts.map(d => {
      return(
        <Button key={d.key} className='margin-b-10 kblue' size="large" onClick={(e) => this.showDesc(e, d.id, d.key)}
         active={this.state.activeDonateButton === d.key}>
          {d.title}
        </Button>
      )
    })
    return(
      <Grid.Row>
        <Grid.Column computer='13' tablet='14' mobile='16'>
          <h4>Choose your donation amount:</h4>
          {buttons}
        </Grid.Column>
      </Grid.Row>
    )
  }
  getOptionDescription(a) {
    console.log('a: ' + a );
    this.setState({
      optionDescription: optionsDescription[a].desc,
      itemprice: optionsDescription[a].price
    });
    if( a === 'other' ) {
      this.setState({ donationEditable: true });
    } else {
      this.setState({ donationEditable: false });
    }
  }

  donateContent() {
    return (
      <Grid.Row>
        <Grid.Column computer='6' tablet='7' mobile='8'>
          <Segment color='grey' tertiary padded>
            <Image src={donate} fluid/>
          </Segment>
        </Grid.Column>
        <Grid.Column computer='6' tablet='7' mobile='8'>
          <Segment basic>
            <h2>Be a part of KZSC:</h2>
            <div>
              {this.props.productDesc}
            </div>
            <Segment padded color='grey' tertiary>

              <Form>
                <Form.Group inline>
                  <Form.Field required control={Select} label='Duration' options={optionsItems}
                   placeholder='Choose an option' onChange={(e, { value }) => this.getOptionDescription(value)} />
                </Form.Group>

                {this.state.optionDescription}

                <Segment compact className='kblue' contentEditable={this.state.donationEditable}>
                  { this.state.itemprice === 0 ? '$0.00' : '$' + this.state.itemprice }
                </Segment>

                <StripeCheckout
                  name="KZSC Support"
                  panelLabel="Donation"
                  amount = {Number(this.state.itemprice) * 100}
                  billingAddress = {true}
                  zipCode = {true}
                  email={this.state.email}
                  token={this.onToken}
                  stripeKey="pk_test_S4C4guamv81sRN307sjfPMRI" />
              </Form>

            </Segment>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    )
  }

  merchandiseContent() {
    return (
      <Grid.Row>

        <Grid.Column computer='3' tablet='7' mobile='8' textAlign='center'>
          <div>
            <Button className="merch-btn" onClick={() => this.addToCart('shirt')} >
              <img className="images" src={shirt} alt=""/>
            </Button>
          </div>
        </Grid.Column>

        <Grid.Column computer='3' tablet='7' mobile='8' textAlign='center'>
          <div>
            <Button className="merch-btn" onClick={() => this.addToCart('bag')}>
              <img className="images" src={bag} alt=""/>
            </Button>
          </div>
        </Grid.Column>

        <Grid.Column computer='3' tablet='7' mobile='8' textAlign='center'>
          <div>
            <Button className="merch-btn" onClick={() => this.addToCart('buttons')}>
              <img className="images" src={buttons} alt=""/>
            </Button>
          </div>
        </Grid.Column>

        <Grid.Column computer='3' tablet='7' mobile='8' textAlign='center'>
          <div>
            <Button className="merch-btn" onClick={() => this.addToCart('shirt2')} >
              <img className="images" src={shirt2} alt=""/>
            </Button>
          </div>
        </Grid.Column>

      </Grid.Row>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const { merchAmount } = this.state

    if( prevState.merchAmount !== merchAmount ) {
      console.log(this.state);
    }
  }

  merchandiseCart(){
    return(
      <Grid.Row>
        <Grid.Column computer='3' tablet='7' mobile='8' textAlign='center'>
          <ItemList items={this.state.items} remove={this.removeItem}/>
        </Grid.Column>

        <Grid.Column computer='3' tablet='7' mobile='8' textAlign='center'>
          <div className="subtotal">Subtotal {(this.state.merchAmount/100).toFixed(2)} </div>
          <Form className="merch-form form-container">
            <StripeCheckout
              name="KZSC Support"
              panelLabel="Donation"
              amount = {this.state.merchAmount}
              // billingAddress = {true}
              // zipCode = {true}
              // email={this.state.email}
              token={this.onToken}
              stripeKey="pk_test_S4C4guamv81sRN307sjfPMRI" />
          </Form>
        </Grid.Column>
      </Grid.Row>
    )
  }

  handleItemClick(name) {
    let donateHeaderString;
    if( name === 'donate' ) {
      donateHeaderString = 'Help us keep noncommercial community radio on the air with a secure pledge today!';
    } else if ( name === 'merch' ) {
      donateHeaderString = 'Help us keep noncommercial community radio on the air by donating today!';
    }
    this.setState({
      activeMenuItem: name,
      donateHeader: donateHeaderString
    })
  }

  render() {
    return (
      <div>
        <Grid centered padded>

          <TopMenuBar handleItemClick={this.handleItemClick.bind(this)} activeMenuItem={this.state.activeMenuItem} menuItems={this.state.menuItems}/>

          <Grid.Row className="div-donate">
            <Grid.Column computer='13' tablet='14' mobile='16' textAlign='center'>
              <span className='donate-header'>{this.state.donateHeader}</span>
            </Grid.Column>
          </Grid.Row>

          {/* {this.state.activeMenuItem === "donate" ? this.donateButtons() : null } */}

          {this.state.activeMenuItem === "donate" ? this.donateContent() : this.merchandiseContent()}

          {this.state.activeMenuItem === "merch" ? this.merchandiseCart() : null }

        </Grid>

      </div>
    );
  }
}

class ItemList extends Component{
  render(){
    return (
      <div>
        <h1> Current Cart </h1>
        <List>
          {this.props.items.map(item => (
            <List.Item key={item.id} className="list-item">
              <List.Content>
                <div className="item-header">
                  <Image className="list-image" src={item.img[item.id]} />
                  <List.Header className="list-header"> {item.header} </List.Header>
                </div>
                <List.Description className="list-description"> {item.desc} </List.Description>
                <div>
                  <Form>
                    <Form.Group inline widths='4'>
                      <Form.Input label="Quantity" type="number" placeholder="1" />
                      {item.header === "KZSC Buttons" ? <span> </span>: <Form.Field label="Size" control={Select} options={sizes} placeholder="Medium" />}
                    </Form.Group>
                  </Form>
                  <span className="suggested-donation"> Suggested Donation: ${item.price} </span>
                  {/* <Button className="remove-btn" onClick={() => this.props.remove(item.id)}>Remove</Button> */}
                </div>
              </List.Content>
              <hr />
            </List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default Donate;
