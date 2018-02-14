/*
 * src/components/Product/Product.js
 * Used by:
 *
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, { Component } from 'react';
import { Grid, Image, Segment, Form, Select, Button, Menu } from 'semantic-ui-react';
import './Product.css';

class Product extends Component {

  constructor(props){
    super(props);
    this.state = {
      additionalActiveItem: 'additionalinfo',
      optionDescription: "Please choose an option to learn more about it",
      itemprice: '0.00',
      optionsDescription: {
        annualcontractpt: {
          desc: 'Sorry, this product is unavailable. Please choose a different combination',
          price: '5000.00'
        },
        annualcontractdt: {
          desc: 'Sorry, this product is unavailable. Please choose a different combination',
          price: '4000.00'
        },
        quarterlycontractpt: {
          desc: 'Sorry, this product is unavailable. Please choose a different combination',
          price: '1400.00'
        },
        quarterlycontractdt: {
          desc: 'Sorry, this product is unavailable. Please choose a different combination',
          price: '1250.00'
        },
        sixtyspots: {
          desc: 'Sorry, this product is unavailable. Please choose a different combination',
          price: '600.00'
        },
        fourtyspots: {
          desc: 'Sorry, this product is unavailable. Please choose a different combination',
          price: '400.00'
        },
        twentyspots: {
          desc: 'Sorry, this product is unavailable. Please choose a different combination',
          price: '200.00'
        },
        pledgedrive: {
          desc: '26 Underwriting Spots for $350',
          price: '350.00'
        }
      }
    }
  }

  getOptionDescription(a) {
    this.setState({
      optionDescription: this.state.optionsDescription[a].desc,
      itemprice: this.state.optionsDescription[a].price
    });
  }

  handleAdditionalItemClick = (e, { name }) => this.setState({ additionalActiveItem: name })

  render(){
    const { additionalActiveItem } = this.state

    return(
      <div className="Product">
        <Grid centered>
          <Grid.Row>
            <Grid.Column computer='6' tablet='7' mobile='8'>
              <Segment basic padded>
                <Image src='https://react.semantic-ui.com/assets/images/wireframe/image.png' fluid/>
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

                    <Button className='kblue margin-t-5'>Add to Cart</Button>
                  </Form>

                </Segment>
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column computer='12' tablet='14' mobile='16'>
              <Menu attached='top' tabular>
                <Menu.Item name='additionalinfo' active={additionalActiveItem === 'additionalinfo'} onClick={this.handleAdditionalItemClick}>
                  Additional Information
                </Menu.Item>
              </Menu>
              <Segment attached='bottom'>
                <h3>Additional information</h3>
                <h5>{this.props.additionalInfoTitle}</h5>
                <div>
                  {this.props.additionalInfoDesc}
                </div>
              </Segment>
            </Grid.Column>
          </Grid.Row>

        </Grid>
      </div>
    );
  }
}

export default Product;
