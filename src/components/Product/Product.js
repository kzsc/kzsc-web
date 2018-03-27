/*
 * src/components/Product/Product.js
 * Used by:
 *
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, { Component } from 'react';
import { Grid, Image, Segment, Form, Select, Menu } from 'semantic-ui-react';
import StripeCheckout from 'react-stripe-checkout';
import './Product.css';

class Product extends Component {

  constructor(props){
    super(props);
    this.state = {
      additionalActiveItem: 'additionalinfo',
      optionDescription: "Please choose an option to learn more about it",
      donationAmount: 0,
      donationEditable: false
    }
    this.getOptionDescription = this.getOptionDescription.bind(this)
    this.handleChangeDonateOptions = this.handleChangeDonateOptions.bind(this)
    this.handleBlurDonateOptions = this.handleBlurDonateOptions.bind(this)
  }

  getOptionDescription(a) {
    this.setState({
      optionDescription: this.props.optionsDescription[a].desc,
      donationAmount: this.props.optionsDescription[a].price
    })
    if( a === 'other' ) {
      this.setState({ donationEditable: true });
    } else {
      this.setState({ donationEditable: false });
    }
  }

  handleChangeDonateOptions(event) {
    let price = event.target.value
    let priceToNumber = price.replace(/[^0-9.]/g, "")
    this.setState({ donationAmount: priceToNumber })
  }

  handleBlurDonateOptions(event) {
    var price = event.target.value
    var priceToNumber = price.replace(/[^0-9.]/g, "")
    var numberOfDecimalPlacesArray = priceToNumber.match(/[.]/g)
    if(numberOfDecimalPlacesArray) {
      var numberOfDecimalPlaces = numberOfDecimalPlacesArray.length
      if(numberOfDecimalPlaces > 1) {
        let removeDecimals = priceToNumber.replace(/[.]/g, "")
        priceToNumber = Number(removeDecimals / 100).toFixed(2)
      } else {
        priceToNumber = Number(priceToNumber).toFixed(2)
      }
    } else {
      priceToNumber = Number(priceToNumber).toFixed(2)
    }
    this.setState({donationAmount: priceToNumber})
  }

  onToken = (token) => {
    var dAmount = 0;
    dAmount = this.state.donationAmount;
    fetch('/payment', {
      method: 'POST',
      headers: new Headers({'content-type': 'application/json'}),
      body: JSON.stringify({
          rtoken: token,
          amount: dAmount
      })
    }).then(response => { })
  }

  onStripeCheckoutOpened(){
    // opened stripe checkout
  }

  onStripeCheckoutClosed(){
    // cloed stripe checkout
  }

  handleAdditionalItemClick = (e, { name }) => this.setState({ additionalActiveItem: name })

  render(){
    const { additionalActiveItem } = this.state
    const additionalInfoHTML = this.props.additionalInfoDesc
    return(
      <div className="Product">
        <Grid centered padded>

          <Grid.Row>
            <Grid.Column computer='7' tablet='7' mobile='8'>
              <Segment color='grey' tertiary padded>
                <Image src={this.props.image} fluid/>
              </Segment>
            </Grid.Column>
            <Grid.Column computer='8' tablet='8' mobile='8'>
              <div>
                { this.props.productTitle ? <h2>{this.props.productTitle}</h2> : null }
                { this.props.productDesc ? <div>{this.props.productDesc}</div> : null }
                <Segment padded color='grey' tertiary>

                  <Form>
                    <Form.Group inline>
                      <Form.Field required control={Select} label='Duration' options={this.props.options}
                       placeholder='Choose an option' onChange={(e, { value }) => this.getOptionDescription(value)} />
                    </Form.Group>

                    {this.state.optionDescription}

                    { this.state.donationEditable ?
                      <input type="text" className='input-segment-kblue' name="donationAmount" width={3}
                        value={this.state.donationAmount === 0 ? '$0.00' : '$' + this.state.donationAmount}
                        onChange={this.handleChangeDonateOptions}
                        onBlur={this.handleBlurDonateOptions}
                      />
                      :
                      <Segment compact className='kblue'>{this.state.donationAmount === 0 ? '$0.00' : '$' + this.state.donationAmount }</Segment>
                    }

                    <StripeCheckout
                      name="KZSC Support"
                      panelLabel="Donation"
                      amount = {Number(this.state.donationAmount) * 100} // donation in cents
                      currency = "USD"
                      shippingAddress
                      billingAddress = {true}
                      zipCode = {true}
                      opened = {this.onStripeCheckoutOpened}
                      closed = {this.onStripeCheckoutClosed}
                      token={this.onToken}
                      stripeKey="pk_test_S4C4guamv81sRN307sjfPMRI"
                    />
                  </Form>

                </Segment>
              </div>
            </Grid.Column>
          </Grid.Row>

          { this.props.additionalInfoTabTitle && this.props.additionalInfoTitle ?
          <Grid.Row>
            <Grid.Column computer='15' tablet='15' mobile='16'>
              <Menu attached='top' tabular>
                <Menu.Item name='additionalinfo' active={additionalActiveItem === 'additionalinfo'} onClick={this.handleAdditionalItemClick}>
                  {this.props.additionalInfoTabTitle}
                </Menu.Item>
              </Menu>
              <Segment attached='bottom'>
                <h3>{this.props.additionalInfoTitle}</h3>
                <div dangerouslySetInnerHTML={{__html: additionalInfoHTML}}></div>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          : null }

        </Grid>
      </div>
    );
  }
}

export default Product;
