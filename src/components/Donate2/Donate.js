/*
 * src/components/Donate/Donate.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, { Component } from 'react';
import { Button, Form, Grid, Image, Popup, Dropdown, Input, Icon } from 'semantic-ui-react';
import StripeCheckout from 'react-stripe-checkout';
import './Donate.css';
import shirt from './kzsc-shirt.jpg';
import shirt2 from './kzsc-shirt-50th.jpg';
import bag from './kzsc-bag.jpg';
import buttons from './kzsc-buttons.jpg';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import donateData from './donateData.json';
import uuid from 'uuid';
import Cart from './Cart'
import Donation from './Donation'

class Donate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donationAmount: 0,

      amount: 0,
      merchAmount: 0,
      itemsInCart: [],
      activeItem: 'donate',
      menuItems: [
        { name: 'donate', title: 'Donate' },
        { name: 'merch', title: 'Merchandise' },
        { name: "cart", title: "Your Cart", label: '0' },
      ],
      itemprice: '0.00',
      quantity: 1,
      size: 'small',
      merchandiseList: [
        {
          id: 'shirt', image: shirt, title: 'KZSC 88 point 1 Tee', price: 25, sizes: true, merchPopupIsOpen: false,
          desc: 'KZSC’s newest tee shirt is a nod to a legendary college radio station in NYC that provided early exposure for what became some of the biggest names in hip-hop. Our shirt is printed on a 50/50 blend modern-style shirt that won’t shrink, if you treat it well. So you’ll look great and feel comfortable when you represent KZSC, the Monterey Bay’s most unique station'
        },
        {
          id: 'bag', image: bag, title: 'KZSC Canvas Tote Bag', price: 30, sizes: false, merchPopupIsOpen: false,
          desc: 'One of KZSC’s most enduring and popular designs, the “PEEL SLOWLY AND SEE” Banana Slug was inspired by Andy Warhol’s cover design for the debut LP by The Velvet Underground. Now KZSC offers a revamp of the design on this sturdy canvas tote bag designed to haul LPs, groceries, or whatever you please.  Its 15.5″ x 14.5″ x 7″ roomy design is topped off with generous 11 inch handles for over-the-shoulder style'
        },
        {
          id: 'buttons', image: buttons, title: 'KZSC Buttons', price: 10, sizes: false, merchPopupIsOpen: false,
          desc: 'Love the Great 88? Grab some KZSC buttons for your hat, shirt, jacket or backpack! Donate a minimum of $10 and receive three unique KZSC buttons, handmade by your favorite DJs. These are 1 inch buttons, protected from the elements with a plastic cover. The pin on the back is also removable in case you’d prefer to make your button a magnet — simply add a magnet to the backside! Some DJs have made pins specific to their show! If you donate during a program that has made specialty pins, we will give you a pin featuring that show’s design in one of the three you receive'
        },
        {
          id: 'shirt2', image: shirt2, title: 'KZSC 50th Anniversary T-shirt', price: 25, sizes: true, merchPopupIsOpen: false,
          desc: 'KZSC’s newest tee shirt is a nod to a legendary college radio station in NYC that provided early exposure for what became some of the biggest names in hip-hop. Our shirt is printed on a 50/50 blend modern-style shirt that won’t shrink, if you treat it well. So you’ll look great and feel comfortable when you represent KZSC, the Monterey Bay’s most unique station'
        }
      ]
    }
    this.updateSize = this.updateSize.bind(this)
    this.updateQuantity = this.updateQuantity.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.handleQuantityChangeMerchAmount = this.handleQuantityChangeMerchAmount.bind(this)
    this.updateDonationAmount = this.updateDonationAmount.bind(this)
  }

  updateDonationAmount(amount) {
    this.setState({donationAmount: amount})
    console.log(amount)
  }

  onToken = (token) => {
    console.log(token)
    var dAmount = 0;
    if(this.state.activeItem === "donate"){
      dAmount = this.state.donationAmount;
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

  /* Merchandise Content BEGIN */
  merchPopupHandleOpen(i) {
    let merchandiseListTemp = this.state.merchandiseList
    let merchTemp = merchandiseListTemp[i] // The item that was opened
    merchTemp.merchPopupIsOpen = true
    this.setState({ merchandiseList: merchandiseListTemp })
  }

  merchPopupHandleClose(i) {
    let merchandiseListTemp = this.state.merchandiseList
    let merchTemp = merchandiseListTemp[i] // The item that was opened
    merchTemp.merchPopupIsOpen = false
    this.setState({ merchandiseList: merchandiseListTemp })
  }

  updateSize = (e, { value }) => this.setState({ size: value })

  updateQuantity(event) {
    this.setState({ quantity: event.target.value })
  }

  merchandiseContent() {
    return (
      <Grid.Row>
        {this.state.merchandiseList.map((item, index) =>
          <Grid.Column key={item.id} width='8' textAlign='center'>
            <Popup className="merchPopup" on='click' basic wide='very'
              open={item.merchPopupIsOpen} onOpen={this.merchPopupHandleOpen.bind(this, index)} onClose={this.merchPopupHandleClose.bind(this, index)}
              trigger={
                <Button>
                  <Image as='a' size='medium' src={item.image} alt="" />
                  <h4>
                    {item.title}<br />
                    ${(item.price).toFixed(2)}
                  </h4>
                </Button>
              }
              content={
                <Grid padded centered stackable>
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <Image size='medium' src={item.image} alt="" />
                    </Grid.Column>
                    <Grid.Column width={11}>
                      <h3>{item.title}</h3>
                      <h4>${item.price}</h4>
                      {item.sizes ? <h5>Size: <Dropdown value={this.state.size} selection options={donateData.sizes} onChange={this.updateSize}/></h5> : null}
                      <h5>Quantity: <Input type="number" value={this.state.quantity} onChange={this.updateQuantity}/></h5>
                      <p>{item.desc}</p>
                      <Button icon labelPosition='left' onClick={() => this.addToCart(item, index, this.state.size, this.state.quantity)}>
                        <Icon name='plus' /> Add to cart
                      </Button>
                      <Button icon labelPosition='right' onClick={this.merchPopupHandleClose.bind(this, index)}>
                        <Icon name='cancel' /> Cancel
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              }
            />
          </Grid.Column>
        )}
      </Grid.Row>
    )
  }

  /* Add item to the cart */
  addToCart(item, index, size, quantity) {
    var itemsArray = this.state.itemsInCart;
    var itemTemp = Object.assign({}, item)
    itemTemp.key = uuid.v4()
    itemTemp.size = size
    itemTemp.quantity = quantity
    itemTemp.donation = itemTemp.price
    itemsArray.push(itemTemp)
    this.setState({
      itemsInCart: itemsArray,
      merchAmount: this.state.merchAmount + ( (item.price * 100) * quantity)
    })
    // Update Left Side Bar
    let length = this.state.itemsInCart.length
    this.setState({
      menuItems: [
        { name: 'donate', title: 'Donate' },
        { name: 'merch', title: 'Merchandise' },
        { name: "cart", title: "Your Cart", label: length }
      ]
    })
    // Reset size and quantity
    this.setState({
      size: 'small', quantity: '1'
    })
    // Close Merch Popup
    let merchandiseListTemp = this.state.merchandiseList
    let merchTemp = merchandiseListTemp[index] // The item that was opened
    merchTemp.merchPopupIsOpen = false
  }
  /* Merchandise Content END */

  /* Remove item from cart */
  removeItem(value){
    let arr = this.state.itemsInCart;
    let itemPrice = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr[i].id === value){
        itemPrice = arr[i].price;
        arr.splice(i, 1);
      }
    }
    this.setState({
      itemsInCart: arr,
      merchAmount: this.state.merchAmount - itemPrice * 100,
      menuItems: [
        { name: 'donate', title: 'Donate' },
        { name: 'merch', title: 'Merchandise' },
        { name: "cart", title: "Your Cart", label: arr.length }
      ]
    })
  }

  handleQuantityChangeMerchAmount(plusOrMinus, price) {
    if(plusOrMinus === "plus") {
      this.setState({ merchAmount: this.state.merchAmount + price * 100 })
    } else if(plusOrMinus === 'minus') {
      this.setState({ merchAmount: this.state.merchAmount - price * 100 })
    } else { // Expecting a number, quantity
      this.setState({})
    }
  }

  cartContent() {
    return(
      <Grid.Row>
        <Grid.Column width='16'>
          <Cart items={this.state.itemsInCart} remove={this.removeItem} onQuantityChange={this.handleQuantityChangeMerchAmount}/>
        </Grid.Column>

        <Grid.Column width='16'>
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

  /* LeftSideBar Event BEGIN */
  handleLeftMenuItemClick = (e, { name }) => this.setState({ activeItem: name })
  /* LeftSideBar Event END */

  render() {
    return (
      <div>
        <Grid centered padded>

          <Grid.Row>
            <Grid.Column computer='3' tablet='3' mobile='16'>
              <LeftSideBar items={this.state.menuItems} active={this.state.activeItem} handleItemClick={this.handleLeftMenuItemClick.bind(this)}/>
            </Grid.Column>

            <Grid.Column computer='12' tablet='12' mobile='16'>
              <h3>
                {this.state.activeItem === "donate" ? "Help us keep noncommercial community radio on the air with a secure pledge today!" : null }
                {this.state.activeItem === "merch"  ? "Help us keep noncommercial community radio on the air by donating today!" : null }
                {this.state.activeItem === "cart"   ? "Review the items in your cart" : null }
              </h3>
              <p>
                {this.state.activeItem === "donate" ? "Thank you for keeping KZSC—your local and live community radio station—broadcasting at 20,000 watts each day!" : null }
                {this.state.activeItem === "merch"  ? "Click on an item below to view a description and options, then checkout using the left side bar" : null }
              </p>

              <Grid stackable>
                {this.state.activeItem === "donate" ? <Donation updateAmount={this.updateDonationAmount}/> : null}
                {this.state.activeItem === "merch"  ? this.merchandiseContent() : null}
                {this.state.activeItem === "cart"   ? this.cartContent() : null}
              </Grid>
            </Grid.Column>
          </Grid.Row>

        </Grid>

      </div>
    )
  }
}

export default Donate;
