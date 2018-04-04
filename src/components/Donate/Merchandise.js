import React, { Component } from 'react'
import { Grid, Popup, Button, Image, Icon, Input, Dropdown, Reveal } from 'semantic-ui-react'
import donateData from './donateData.json'

class Merchandise extends Component {

  constructor(props) {
    super(props)
    this.state = {
      quantity: 1,
      size: 'small'
    }
  }

  merchPopupHandleOpen(i) {
    let merchandiseListTemp = this.props.merchandiseList
    let merchTemp = merchandiseListTemp[i] // The item that was opened
    merchTemp.merchPopupIsOpen = true
    this.props.updateMerchList(merchandiseListTemp)
  }

  merchPopupHandleClose(index) {
    let merchandiseListTemp = this.props.merchandiseList
    let merchTemp = merchandiseListTemp[index] // The item that was opened
    merchTemp.merchPopupIsOpen = false
    this.props.updateMerchList(merchandiseListTemp)
  }

  updateSize = (e, { value }) => this.setState({ size: value })

  updateQuantity = (e, { value }) => this.setState({ quantity: value })

  addToCart(item, index, size, quantity) {
    // If quantity is positive
    if(quantity > 0) {
      this.props.addToCart(item, index, size, quantity)
    }
    // Reset size and quantity
    this.setState({ size: 'small', quantity: '1' })
    // Close Merch Popup
    this.merchPopupHandleClose(index)
  }

  render() {
    return (
      <Grid stackable>
        <Grid.Row className="Merchandise">
          {this.props.merchandiseList.map((item, index) =>
            <Grid.Column key={item.id} width='8' textAlign='center' className="padding-t-1rem padding-b-1rem">
              <Popup className="merch-popup" on='click' basic wide='very'
                open={item.merchPopupIsOpen} onOpen={this.merchPopupHandleOpen.bind(this, index)} onClose={this.merchPopupHandleClose.bind(this, index)}
                trigger={
                  <Button basic color='black'>
                    {item.imageReveal ?
                      <RevealImage image={item.image} imageReveal={item.imageReveal} />
                      : <Image size='medium' src={item.image} alt="" />
                    }
                    <div className="merch-header">
                      {item.title}<br />
                      ${(item.price).toFixed(2)}
                    </div>
                  </Button>
                }
                content={
                  <Grid padded centered stackable>
                    <Grid.Row>
                      <Grid.Column width={5}>
                        {item.imageReveal ? <RevealImage image={item.image} imageReveal={item.imageReveal} /> : <Image size='medium' src={item.image} alt="" /> }
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
      </Grid>
    )
  }
}

export default Merchandise

function RevealImage(props) {
  return (
    <Reveal animated='small fade'>
      <Reveal.Content visible>
        <Image size='medium' src={props.image} alt="" />
      </Reveal.Content>
      <Reveal.Content hidden>
        <Image size='medium' src={props.imageReveal} alt="" />
      </Reveal.Content>
    </Reveal>
  );
}
