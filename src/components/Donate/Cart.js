/*
 * src/components/Cart/Cart.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, { Component } from 'react'
import { Grid, Input, Dropdown, Image, Button } from 'semantic-ui-react'
import './Donate.css';
import donateData from './donateData.json';

class Cart extends Component{

  componentWillMount() {
    this.setState({
      items: this.props.items
    })
    this.handleQuantityChange = this.handleQuantityChange.bind(this)
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
    this.setState({ items: items })
    this.props.remove(i.key)
    this.props.onQuantityChange("minus", i.price)
  }

  handleClickPlus(i) {
    let newQuantity = Number(i.quantity) + 1
    i.quantity = newQuantity
    this.props.onQuantityChange("plus", i.price)
  }

  handleQuantityChange(event) {
    let items = this.props.items
    for(var i = 0; i < items.length; i++) {
      if(items[i].key === event.target.name) {
        items[i].quantity = event.target.value
      }
    }
    this.setState({ items: items })
  }

  render(){
    return (
      <div>
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
                  Enter Donation Amount: <Input type="number" value={"$" + (item.price * item.quantity).toFixed(2)} />
                  <span>Minimum Donation: ${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </Grid.Column>
              <hr />
            </Grid.Row>
          ))}
        </Grid>
      </div>
    );
  }
}

export default Cart
