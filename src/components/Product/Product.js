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
      itemprice: '0.00',
      activeMenuItem: 'title',
      menuItems: [
        { name: 'title', title: this.props.productTitle }
      ]
    }
  }

  handleItemClick(name) { this.setState({ activeMenuItem: name }) }

  getOptionDescription(a) {
    this.setState({
      optionDescription: this.props.optionsDescription[a].desc,
      itemprice: this.props.optionsDescription[a].price
    });
  }

  handleAdditionalItemClick = (e, { name }) => this.setState({ additionalActiveItem: name })

  render(){
    const { additionalActiveItem } = this.state
    const additionalInfoHTML = this.props.additionalInfoDesc
    return(
      <div className="Product">
        <Grid centered padded>

          {/* <TopMenuBar handleItemClick={this.handleItemClick.bind(this)} activeMenuItem={this.state.activeMenuItem} menuItems={this.state.menuItems}/> */}

          <Grid.Row>
            <Grid.Column computer='6' tablet='7' mobile='8'>
              <Segment color='grey' tertiary padded>
                <Image src={this.props.image} fluid/>
              </Segment>
            </Grid.Column>
            <Grid.Column computer='6' tablet='7' mobile='8'>
              <Segment basic>
                <h2>{this.props.productTitle}</h2>
                <div>
                  {this.props.productDesc}
                </div>
                <Segment padded color='grey' tertiary>

                  <Form>
                    <Form.Group inline>
                      <Form.Field required control={Select} label='Duration' options={this.props.options}
                       placeholder='Choose an option' onChange={(e, { value }) => this.getOptionDescription(value)} />
                    </Form.Group>

                    {this.state.optionDescription}

                    <Segment compact className='kblue'>
                      { this.state.itemprice === 0 ? '$0.00' : '$' + this.state.itemprice }
                    </Segment>

                    <Form>
                      <StripeCheckout name="KZSC Support" panelLabel="Donation"
                        amount = {this.state.itemprice} billingAddress = {true}
                        zipCode = {true} email={this.state.email}
                        token={this.onToken} stripeKey="pk_test_S4C4guamv81sRN307sjfPMRI" />
                    </Form>
                  </Form>

                </Segment>
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column computer='12' tablet='14' mobile='16'>
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

        </Grid>
      </div>
    );
  }
}

export default Product;
