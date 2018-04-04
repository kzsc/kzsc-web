/*
 * src/components/Cart/Cart.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, { Component } from 'react'
import { Grid, Input, Dropdown, Image, Button, Form } from 'semantic-ui-react'
import StripeCheckout from 'react-stripe-checkout';
import './Donate.css';
import donateData from './donateData.json';

class Cart extends Component{

  componentWillMount() {
    this.setState({ })
    this.handleQuantityChange = this.handleQuantityChange.bind(this)
    this.handlePriceTyping = this.handlePriceTyping.bind(this)
    this.handlePriceBlurOut = this.handlePriceBlurOut.bind(this)
    this.hangleChangeDropdownSize = this.hangleChangeDropdownSize.bind(this)
    this.handleQuantityBlur = this.handleQuantityBlur.bind(this)
  }

  handleClickPlus(item, index) {
    let newQuantity = Number(item.quantity) + 1
    item.quantity = Math.floor(newQuantity)
    item.donation = Number(item.price * newQuantity).toFixed(2)
    this.props.onQuantityChange()
  }

  handleClickMinus(item, index) {
    let newQuantity = Number(item.quantity) - 1
    if(newQuantity < 1) {
      var items = this.props.items
      for(var i = 0; i < items.length; i++) {
        if(i === index) {
          items = items.splice(i, 1)
        }
      }
    }
    item.quantity = Math.floor(newQuantity)
    item.donation = Number(item.price * newQuantity).toFixed(2)
    this.props.updateItemsInCart(items)
    this.props.remove(item.key)
    this.props.onQuantityChange()
  }

  handleQuantityChange(event) {
    let items = this.props.items
    for(var i = 0; i < items.length; i++) {
      if(items[i].key === event.target.name) {
        items[i].quantity = event.target.value
        items[i].donation = Number(items[i].price * items[i].quantity).toFixed(2)
      }
    }
    this.props.updateItemsInCart(items)
    this.props.onQuantityChange()
  }

  handleQuantityBlur(event) {
    let items = this.props.items
    for(var i = 0; i < items.length; i++) {
      if(items[i].key === event.target.name) {
        items[i].quantity = Math.floor(Math.abs(event.target.value))
        items[i].donation = Number(items[i].price * items[i].quantity).toFixed(2)
      }
    }
    this.props.updateItemsInCart(items)
    this.props.onQuantityChange()
  }

  handlePriceTyping(event) {
    let items = this.props.items
    for(var i = 0; i < items.length; i++) {
      if(items[i].key === event.target.name) {
        items[i].donation = String(event.target.value).replace(/[^0-9.]/g, "")
      }
    }
    this.props.updateItemsInCart(items)
    this.props.onQuantityChange()
  }

  handlePriceBlurOut(event) {
    let items = this.props.items
    for(var i = 0; i < items.length; i++) {
      if(items[i].key === event.target.name) {
        let donation = String(event.target.value).replace(/[^0-9.]/g, "")
        var numberOfDecimalPlacesArray = donation.match(/[.]/g)
        if(numberOfDecimalPlacesArray) {
          var numberOfDecimalPlaces = numberOfDecimalPlacesArray.length
          if(numberOfDecimalPlaces > 1) {
            let removeDecimals = donation.replace(/[.]/g, "")
            items[i].donation = Number(removeDecimals / 100).toFixed(2)
          } else {
            items[i].donation = Number(donation).toFixed(2)
          }
        } else {
          items[i].donation = Number(donation).toFixed(2)
        }
        var d = items[i].donation, p = items[i].price, q = items[i].quantity;
        if(d < (p * q)) {
          items[i].donation = Number(p * q).toFixed(2)
        }
      }
    }
    this.props.updateItemsInCart(items)
    this.props.onQuantityChange()
  }

  hangleChangeDropdownSize = (e, { value, name }) => {
    let items = this.props.items
    for(var i = 0; i < items.length; i++) {
      if(items[i].key === name) {
        items[i].size = value
      }
    }
    this.props.updateItemsInCart(items)
  }

  getListOfCartItems() {
    if(this.props.items.length !== 0) {
      return (
        <Grid>
          {this.props.items.map((item, index) => (
            <Grid.Row key={item.key}>
              <Grid.Column computer='7' tablet='8' mobile='6'>
                <Image className="cart-image" src={item.image} />
              </Grid.Column>
              <Grid.Column computer='9' tablet='8' mobile='10'>
                <div className="cart-header">
                  {item.title}<br/>
                  ${(item.price).toFixed(2)}
                </div>
                <div className="cart-size">
                  {item.sizes ? "Size:" : null }
                  {item.sizes ? <Dropdown name={item.key} placeholder='Size' value={item.size} selection options={donateData.sizes} onChange={this.hangleChangeDropdownSize}/> : null}
                </div>
                <div className="cart-quantity">
                  Quantity:
                  <br/>
                  <Input type='number' value={item.quantity} name={item.key} onChange={this.handleQuantityChange} onBlur={this.handleQuantityBlur}>
                    <Button icon="minus" onClick={this.handleClickMinus.bind(this, item, index)}/>
                    <input />
                    <Button icon="plus" onClick={this.handleClickPlus.bind(this, item, index)}/>
                  </Input>
                  <br/>
                  <span>Use the minus button to remove this item</span>
                </div>
                <div className="cart-donation">
                  Enter Donation Amount: <Input name={item.key} type="text" value={"$" + item.donation} onChange={this.handlePriceTyping} onBlur={this.handlePriceBlurOut} />
                  <span>Minimum Donation: ${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </Grid.Column>
            </Grid.Row>
          ))}
        </Grid>
      )
    }
  }

  onToken = (token) => {
    // console.log(token)
    var dAmount = 0;
    dAmount = this.props.merchAmount;
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

  render(){
    return (
      <Grid stackable>
        <Grid.Row>

          <Grid.Column width='16' className="padding-t-1rem padding-b-1rem">
            {this.getListOfCartItems()}
          </Grid.Column>

          {this.props.items.length !== 0 ?
          <Grid.Column width='16' className="padding-t-1rem padding-b-1rem">
            <div className="merch-subtotal">Subtotal {(this.props.merchAmount).toFixed(2)} </div>
            <Form>
              <StripeCheckout
                name="KZSC Support"
                panelLabel="Donation"
                amount = {Number(this.props.merchAmount) * 100} // donation in cents
                currency = "USD"
                shippingAddress
                billingAddress = {true}
                zipCode = {true}
                opened = {this.onStripeCheckoutOpened}
                closed = {this.onStripeCheckoutClosed}
                token={this.onToken}
                stripeKey="pk_test_S4C4guamv81sRN307sjfPMRI" />
            </Form>
          </Grid.Column>
          : null }

        </Grid.Row>
      </Grid>
    )
  }
}

export default Cart
