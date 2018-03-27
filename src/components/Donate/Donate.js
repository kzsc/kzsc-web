/*
 * src/components/Donate/Donate.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import './Donate.css';
import shirt from './kzsc-shirt.jpg';
import shirt2 from './kzsc-shirt-50th.jpg';
import bag from './kzsc-bag.jpg';
import bagReveal from './kzsc-bag2.jpg';
import buttons from './kzsc-buttons.jpg';
import buttonsReveal from './kzsc-buttons2.jpg';
import billsImage from '../../assets/images/bills1.jpg'
import donate from './donate-img.jpg';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import uuid from 'uuid';
import Cart from './Cart'
import Merchandise from './Merchandise'
import Product from '../Product/Product'
import donateData from './donateData'

class Donate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donationAmount: 0,
      merchAmount: 0,
      itemsInCart: [],
      activeItem: 'donate',
      menuItems: [
        { name: 'donate', title: 'Donate' },
        { name: 'bills', title: 'KZSC Bills' },
        { name: 'merch', title: 'KZSC Products' },
        { name: "cart", title: "Your Cart", label: 0 },
      ],
      merchandiseList: [
        {
          id: 'shirt', image: shirt, title: 'KZSC 88 point 1 Tee', price: 25, sizes: true, merchPopupIsOpen: false,
          desc: 'KZSC’s newest tee shirt is a nod to a legendary college radio station in NYC that provided early exposure for what became some of the biggest names in hip-hop. Our shirt is printed on a 50/50 blend modern-style shirt that won’t shrink, if you treat it well. So you’ll look great and feel comfortable when you represent KZSC, the Monterey Bay’s most unique station'
        },
        {
          id: 'bag', image: bag, imageReveal: bagReveal, title: 'KZSC Canvas Tote Bag', price: 30, sizes: false, merchPopupIsOpen: false,
          desc: 'One of KZSC’s most enduring and popular designs, the “PEEL SLOWLY AND SEE” Banana Slug was inspired by Andy Warhol’s cover design for the debut LP by The Velvet Underground. Now KZSC offers a revamp of the design on this sturdy canvas tote bag designed to haul LPs, groceries, or whatever you please.  Its 15.5″ x 14.5″ x 7″ roomy design is topped off with generous 11 inch handles for over-the-shoulder style'
        },
        {
          id: 'buttons', image: buttons, imageReveal: buttonsReveal, title: 'KZSC Buttons', price: 10, sizes: false, merchPopupIsOpen: false,
          desc: 'Love the Great 88? Grab some KZSC buttons for your hat, shirt, jacket or backpack! Donate a minimum of $10 and receive three unique KZSC buttons, handmade by your favorite DJs. These are 1 inch buttons, protected from the elements with a plastic cover. The pin on the back is also removable in case you’d prefer to make your button a magnet — simply add a magnet to the backside! Some DJs have made pins specific to their show! If you donate during a program that has made specialty pins, we will give you a pin featuring that show’s design in one of the three you receive'
        },
        {
          id: 'shirt2', image: shirt2, title: 'KZSC 50th Anniversary T-shirt', price: 25, sizes: true, merchPopupIsOpen: false,
          desc: 'KZSC’s newest tee shirt is a nod to a legendary college radio station in NYC that provided early exposure for what became some of the biggest names in hip-hop. Our shirt is printed on a 50/50 blend modern-style shirt that won’t shrink, if you treat it well. So you’ll look great and feel comfortable when you represent KZSC, the Monterey Bay’s most unique station'
        }
      ],

      amount: 0,
      itemprice: '0.00'
    }
    // this.updateSize = this.updateSize.bind(this)
    // this.updateQuantity = this.updateQuantity.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.handleQuantityChangeMerchAmount = this.handleQuantityChangeMerchAmount.bind(this)
    this.updateDonationAmount = this.updateDonationAmount.bind(this)
    this.addToCart = this.addToCart.bind(this)
    this.updateMerchList = this.updateMerchList.bind(this)
    this.updateItemsInCart = this.updateItemsInCart.bind(this)
  }

  /* updateDonationAmount: updates donation price, used in Donation */
  updateDonationAmount(amount) {
    this.setState({donationAmount: amount})
  }

  /* updateMerchAmount: uses items in cart array to update total cart price */
  updateMerchAmount() {
    let merchAmountSum = this.state.itemsInCart.reduce((sum,item) => {
      return sum + Number(item.donation)
    }, 0)
    this.setState({ merchAmount: merchAmountSum })
  }

  updateMerchList(tempList) {
    this.setState({ merchandiseList: tempList })
  }

  updateItemsInCart(tempList) {
    this.setState({ itemsInCart: tempList })
  }

  /* addToCart: add an item to the cart */
  addToCart(item, index, size, quantity) {
    var itemsArray = this.state.itemsInCart;
    var itemTemp = Object.assign({}, item)
    itemTemp.key = uuid.v4()
    itemTemp.size = size
    itemTemp.quantity = Math.floor(Math.abs(quantity))
    itemTemp.donation = (itemTemp.price * quantity)
    itemsArray.push(itemTemp)
    this.setState({ itemsInCart: itemsArray })
    this.updateMerchAmount()
    // Update Left Side Bar
    let length = this.state.itemsInCart.length
    this.setState({
      menuItems: [
        { name: 'donate', title: 'Donate' },
        { name: 'bills', title: 'KZSC Bills' },
        { name: 'merch', title: 'Merchandise' },
        { name: "cart", title: "Your Cart", label: length }
      ]
    })
  }

  /* removeItem: remove item from cart */
  removeItem(value){
    var itemsInCartTemp = this.state.itemsInCart;
    for(let i = 0; i < itemsInCartTemp.length; i++){
      if(itemsInCartTemp[i].id === value){
        itemsInCartTemp.splice(i, 1);
      }
    }
    this.setState({
      itemsInCart: itemsInCartTemp,
      menuItems: [
        { name: 'donate', title: 'Donate' },
        { name: 'bills', title: 'KZSC Bills' },
        { name: 'merch', title: 'Merchandise' },
        { name: "cart", title: "Your Cart", label: itemsInCartTemp.length }
      ]
    })
    this.updateMerchAmount()
  }

  handleQuantityChangeMerchAmount() {
    this.updateMerchAmount()
  }

  /* LeftSideBar Event */
  handleLeftMenuItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    return (
      <Grid centered padded stackable>

        <Grid.Row>
          <Grid.Column width='4'>
            <LeftSideBar items={this.state.menuItems} active={this.state.activeItem} handleItemClick={this.handleLeftMenuItemClick.bind(this)}/>
          </Grid.Column>

          <Grid.Column width='12'>
            <h3>
              {this.state.activeItem === "donate"  ? "Help us keep noncommercial community radio on the air with a secure pledge today!" : null }
              {this.state.activeItem === "merch"   ? "Help us keep noncommercial community radio on the air by donating today!" : null }
              {this.state.activeItem === "bills"   ? "Help KZSC to pay the bills! It costs $250,000 to run our station every year" : null }
              {this.state.activeItem === "cart" && this.state.itemsInCart.length !== 0 ? "Review the items in your cart" : null }
              {this.state.activeItem === "cart" && this.state.itemsInCart.length === 0 ? "Your cart is empty, use the \"KZSC Products\" tab to view our shnazy merchandise" : null }
            </h3>
            <p>
              {this.state.activeItem === "donate" ? "Thank you for keeping KZSC—your local and live community radio station—broadcasting at 20,000 watts each day!" : null }
              {this.state.activeItem === "merch"  ? "Click on an item below to view a description and options, then checkout using the left side bar" : null }
            </p>

            {this.state.activeItem === "donate" ? <Product options={donateData.donation.donationOptions}
                                                           optionsDescription={donateData.donation.donationOptionsDescription}
                                                           image={donate} />
                                                : null}
            {this.state.activeItem === "merch"  ? <Merchandise merchandiseList={this.state.merchandiseList}
                                                               addToCart={this.addToCart}
                                                               updateMerchList={this.updateMerchList} />
                                                : null}
            {this.state.activeItem === "bills"  ? <Product options={donateData.bills.billsOptions}
                                                           optionsDescription={donateData.bills.billsOptionsDescription}
                                                           productTitle={donateData.bills.billsProductTitle}
                                                           additionalInfoTabTitle={donateData.bills.billsAdditionalInfoTabTitle}
                                                           additionalInfoTitle={donateData.bills.billsAdditionalInfoTitle}
                                                           additionalInfoDesc={donateData.bills.billsAdditionalInfoDesc}
                                                           image={billsImage} />
                                                : null }
            {this.state.activeItem === "cart"   ? <Cart items={this.state.itemsInCart}
                                                              updateItemsInCart={this.updateItemsInCart}
                                                              merchAmount={this.state.merchAmount}
                                                              remove={this.removeItem}
                                                              onQuantityChange={this.handleQuantityChangeMerchAmount} />
                                                : null}

          </Grid.Column>
        </Grid.Row>

      </Grid>
    )
  }
}

export default Donate;
