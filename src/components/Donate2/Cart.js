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
    this.setState({
      items: this.props.items
    })
    this.handleQuantityChange = this.handleQuantityChange.bind(this)
    this.handlePriceTyping = this.handlePriceTyping.bind(this)
  }

  handleClickMinus(i, index) {
    let newQuantity = Number(i.quantity) - 1
    if(newQuantity < 1) {
      var items = this.props.items
      for(var j = 0; j < items.length; j++) {
        if(j === index) {
          items = items.splice(j, 1)
        }
      }
    }
    i.quantity = newQuantity
    i.donation = i.price * newQuantity
    this.setState({ items: items })
    this.props.remove(i.key)
    this.props.onQuantityChange("minus", i.price)
  }

  handleClickPlus(i) {
    let newQuantity = Number(i.quantity) + 1
    i.quantity = newQuantity
    i.donation = i.price * newQuantity
    this.props.onQuantityChange("plus", i.price)
  }

  handleQuantityChange(event) {
    let items = this.props.items
    for(var i = 0; i < items.length; i++) {
      if(items[i].key === event.target.name) {
        items[i].quantity = event.target.value
        items[i].donation = items[i].price * items[i].quantity
        this.props.onQuantityChange(items[i].quantity, items[i].price)
      }
    }
    this.setState({ items: items })
  }

  handlePriceTyping(event) {
    console.log('handlePriceTyping')
    console.log(event.target)
    let items = this.props.items
    for(var i = 0; i < items.length; i++) {
      if(items[i].key === event.target.name) {
        console.log(items[i].donation)
        console.log(event.target.value)
        console.log(items[i].quantity)
        items[i].donation = Number(event.target.value).replace(/[$]/g,"")
        console.log(items[i].donation)
      }
    }
    this.setState({ items: items })
  }

  handlePriceChange(price, quantity, proxy, event) {
    console.log('handlePriceChange')
    console.log(event)
    let items = this.props.items
    for(var i = 0; i < items.length; i++) {
      // if(items[i].key === event.name) {
      //   let donation = event.value
      //   if(donation*quantity < price*quantity) {
      //     donation = price * quantity
      //   }
      //   items[i].donation = Number(donation/quantity)
      // }
    }
    this.setState({ items: items })
  }

  getListOfCartItems() {
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
                {item.sizes ? <Dropdown placeholder='Size' value={item.size} selection options={donateData.sizes} /> : null}
              </div>
              <div className="cart-quantity">
                Quantity:
                <Input type='number' value={item.quantity} name={item.key} onChange={this.handleQuantityChange}>
                  <Button icon="minus" onClick={this.handleClickMinus.bind(this, item, index)}/>
                  <input />
                  <Button icon="plus" onClick={this.handleClickPlus.bind(this, item)}/>
                </Input>
              </div>
              <div className="cart-donation">
                Enter Donation Amount: <Input name={item.key} type="text" value={"$" + Number(item.donation)} onChange={this.handlePriceTyping}  />
                <span>Minimum Donation: ${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            </Grid.Column>
            <hr />
          </Grid.Row>
        ))}
      </Grid>
    )
  }

  onToken = (token) => {
    console.log(token)
    var dAmount = 0;
    dAmount = this.state.merchAmount;
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
      <div>
        {this.getListOfCartItems()}
      </div>
    )
  }
}

export default Cart

// onBlur={this.handlePriceChange.bind(this, item.price, item.quantity)}
