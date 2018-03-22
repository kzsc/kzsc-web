import React, { Component } from 'react'
import { Grid, Segment, Image, Form, Select } from 'semantic-ui-react'
import StripeCheckout from 'react-stripe-checkout'
import donate from './donate-img.jpg';
import donateData from './donateData.json'

class Donation extends Component {

  constructor(props) {
    super(props)
    this.state = {
      donationAmount: 0,
      donationPrice: '0.00',
      mainTitle: "Help us keep noncommercial community radio on the air with a secure pledge today!",
      secondTitle: "Choose from our options or select 'Give What You Can' to fill in a donation below",
      optionDescription: "Please choose an option to learn more about it",
      donationEditable: false
    }
    this.getOptionDescription = this.getOptionDescription.bind(this)
    this.handleChangeDonateOptions = this.handleChangeDonateOptions.bind(this)
    this.handleBlurDonateOptions = this.handleBlurDonateOptions.bind(this)
  }

  updateDonationAmount(amount){
    this.props.updateAmount(amount);
  }

  getOptionDescription(a) {
    this.setState({
      optionDescription: donateData.optionsDescription[a].desc,
      donationAmount: donateData.optionsDescription[a].price
    });
    this.updateDonationAmount(donateData.optionsDescription[a].price)
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
    this.updateDonationAmount(priceToNumber)
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
    this.updateDonationAmount(priceToNumber)
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

  render() {
    return (
      <Grid.Row columns="2">
        <Grid.Column>
          <Segment color='grey' tertiary padded>
            <Image src={donate} fluid/>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment padded color='grey' tertiary>
            <Form>
              <Form.Group inline>
                <Form.Field required control={Select} label='Donar Levels' options={donateData.optionsItems}
                 placeholder='Choose an option' onChange={(e, { value }) => this.getOptionDescription(value)} />
              </Form.Group>

              {this.state.optionDescription}

              { this.state.donationEditable ?
                <input type="text" className='input-segment-kblue' name="donationAmount" width={3}
                  value={this.state.donationAmount === 0 ? '$0.00' : '$' + this.state.donationAmount}
                  onChange={this.handleChangeDonateOptions}
                  onBlur={this.handleBlurDonateOptions} />
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
                stripeKey="pk_test_S4C4guamv81sRN307sjfPMRI" />
            </Form>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    )
  }

}

export default Donation
