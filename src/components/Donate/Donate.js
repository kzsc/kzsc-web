import React, { Component } from 'react';
import { Container, Button, Form, Grid, Column, List, Image } from 'semantic-ui-react';
import './Donate.css';
import shirt from './kzsc-shirt.jpg';
import bag from './kzsc-bag.jpg';
import buttons from './kzsc-buttons.jpg';


const states = [
    { key: 'AL', text: 'Alabama', name: 'sstate', value: 'alabama' }, { key: 'AK', text: 'Alaska', value: 'alaska' },
    { key: 'AZ', text: 'Arizona', value: 'arizona' }, { key: 'AR', text: 'Arkansas', value: 'arkansas' },
    { key: 'CA', text: 'California', value: 'california' }, { key: 'CO', text: 'Colorado', value: 'colorado' },
    { key: 'CT', text: 'Connecticut', value: 'connecticut' }, { key: 'DE', text: 'Delaware', value: 'delaware' },
    { key: 'FL', text: 'Florida', value: 'florida' }, { key: 'GA', text: 'Georgia', value: 'georgia' },
    { key: 'HI', text: 'Hawaii', value: 'hawaii' }, { key: 'ID', text: 'Idaho', value: 'idaho' },
    { key: 'IL', text: 'Illinois', value: 'illinois' }, { key: 'IN', text: 'Indiana', value: 'indiana' },
    { key: 'IA', text: 'Iowa', value: 'iowa' }, { key: 'KS', text: 'Kansas', value: 'kansas' },
    { key: 'KY', text: 'Kentucky', value: 'kentucky' }, { key: 'LA', text: 'Lousiana', value: 'louisana' },
    { key: 'ME', text: 'Maine', value: 'maine' }, { key: 'MD', text: 'Maryland', value: 'maryland' },
    { key: 'MA', text: 'Massachusetts', value: 'massachusetts' }, { key: 'MI', text: 'Michigan', value: 'michigan' },
    { key: 'MN', text: 'Minnesota', value: 'minnesota' }, { key: 'MS', text: 'Mississippi', value: 'mississippi' },
    { key: 'MO', text: 'Missouri', value: 'missouri' }, { key: 'MT', text: 'Montana', value: 'montana' },
    { key: 'NE', text: 'Nebraska', value: 'nebraska' }, { key: 'NV', text: 'Nevada', value: 'nevada' },
    { key: 'NH', text: 'New Hampshire', value: 'new hampshire' }, { key: 'NJ', text: 'New Jersey', value: 'new jersey' },
    { key: 'NM', text: 'New Mexico', value: 'new mexico' }, { key: 'NY', text: 'New York', value: 'new york' },
    { key: 'NC', text: 'North Carolina', value: 'north carolina' }, { key: 'ND', text: 'North Dakota', value: 'north dakota' },
    { key: 'OH', text: 'Ohio', value: 'ohio' }, { key: 'OK', text: 'Oklahoma', value: 'oklahoma' },
    { key: 'OR', text: 'Oregon', value: 'oregon' }, { key: 'PA ', text: 'Pennsylvania', value: 'pennsylvania' },
    { key: 'RI', text: 'Rhode Island', value: 'rhode island' }, { key: 'SC', text: 'South Carolina', value: 'south carolina' },
    { key: 'TN', text: 'Tennessee', value: 'tennessee' }, { key: 'TX', text: 'Texas', value: 'texas' },
    { key: 'UT', text: 'Utah', value: 'utah' }, { key: 'VT', text: 'Vermont', value: 'vermont' },
    { key: 'VA', text: 'Virginia', value: 'virgina' }, { key: 'WA', text: 'Washington', value: 'washington' },
    { key: 'WV', text: 'West Virginia', value: 'west virginia' }, { key: 'WI', text: 'Wisconsin', value: 'wisconsin' },
    { key: 'WY', text: 'Wyoming', value: 'wyoming' }
];

const sizes = [
    { key: 's', text: 'Small', value: 'small' }, { key: 'm', text: 'Medium', value: 'medium' },
    { key: 'l', text: 'Large', value: 'large' }, { key: 'xl', text: 'X-Large', value: 'x-large' },
    { key: '2xl', text: '2XL', value: '2x-large' }
];

const info = [];

const productDesc = [
    { key: 'shirt', header: 'KZSC 88 point 1 Tee', img:{shirt}, desc: "KZSC’s newest tee shirt is a nod to a legendary college radio station in NYC that provided early exposure for what became some of the biggest names in hip-hop. Our shirt is printed on a 50/50 blend modern-style shirt that won’t shrink, if you treat it well. So you’ll look great and feel comfortable when you represent KZSC, the Monterey Bay’s most unique station."},
    { key: 'bag', header: 'KZSC Canvas Tote Bag', img:{bag}, desc: "One of KZSC’s most enduring and popular designs, the “PEEL SLOWLY AND SEE” Banana Slug was inspired by Andy Warhol’s cover design for the debut LP by The Velvet Underground. Now KZSC offers a revamp of the design on this sturdy canvas tote bag designed to haul LPs, groceries, or whatever you please.  Its 15.5″ x 14.5″ x 7″ roomy design is topped off with generous 11 inch handles for over-the-shoulder style."},
    { key: 'buttons',header: 'KZSC Buttons', img:{buttons},  desc: "Love the Great 88? Grab some KZSC buttons for your hat, shirt, jacket or backpack! Donate a minimum of $10 and receive three unique KZSC buttons, handmade by your favorite DJs. These are 1 inch buttons, protected from the elements with a plastic cover. The pin on the back is also removable in case you’d prefer to make your button a magnet — simply add a magnet to the backside! Some DJs have made pins specific to their show! If you donate during a program that has made specialty pins, we will give you a pin featuring that show’s design in one of the three you receive."}
];

class Donate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "donate",
            donateDesc: "Celebrate 88.1 FM -- 20,000 watts of good will",
            fname: "", lname: "",
            email: "", pnumber: "",
            city: "", zip: "", sstate: "",
            cname: "", ccnum: "",
            expdate: "", scode: "",
            amount: 88.10,
            items: []
        }
        this.toggle = this.toggle.bind(this);
        this.showDesc = this.showDesc.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleAmt = this.handleAmt.bind(this);
        this.setInfo = this.setInfo.bind(this);
        this.getItem = this.getItem.bind(this);
        this.notinCart = this.notinCart.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.removeItem = this.removeItem.bind(this);

    }


    toggle(value) {
        if (value != this.state.content) {
            this.setState({
                content: value
            })
        }
    }

    showDesc(e, req) {
        e.preventDefault();
        switch (req) {
            case '88.1':
                this.setState({
                    donateDesc: "Celebrate 88.1 FM -- 20,000 watts of good will",
                    amount: 88.10
                })
                break;
            case 'daily-fiddy':
                this.setState({
                    donateDesc: "Fund next 50 years of Student-run Community Radio, with a daily \"Fiddy\" cents",
                    amount: 182.50
                })
                break;
            case 'buck-a-day':
                this.setState({
                    donateDesc: "Put a Susan B Anthony in the slot every day to keep the KZSC Jukebox jumping!",
                    amount: 365.00
                })
                break;
            case '50-years-of-kzsc':
                this.setState({
                    donateDesc: "Celebrate 50 years of Student-Run Community Radio with a monthly donation of $50",
                    amount: 600.00
                })
                break;
            case 'kzsc-sustainer':
                this.setState({
                    donateDesc: "Celebrate KZSC FM with a monthly donation of $88.10",
                    amount: 1057.20
                })
                break;
            default:
                console.log("Nothing selected");
                break;
        }
    }

    /* Get item description */
    getItem(value){
        for(let i = 0; i < productDesc.length; i++){
            if(value == productDesc[i].key){
                return productDesc[i];
            }
        }
    }

    /* Check that the current item selected is not already in cart */
    notinCart(arr, value){
        if(arr.length != 0){
            for(let i = 0; i < arr.length; i++){
                if(arr[i].id == value ){
                    return false;
                }
            }
        }
        return true;
    }

    /* Add item to the cart */
    addToCart(value){
        let arr = this.state.items;
        let item = this.getItem(value);
        if(this.notinCart(arr, value)){
            arr.push({ id: item.key, header: item.header, img: item.img, desc: item.desc});
            this.setState({
                items: arr
            })
        }
    }

    /* Remove item from cart */
    removeItem(value){
        let arr = this.state.items;
        for(let i = 0; i < arr.length; i++){
            if(arr[i].id == value){
                arr.splice(i, 1);
            }
        }
        this.setState({
            items: arr
        })
    }


    handleChange = (e, { value }) => {
        if (e.target.name === undefined) {
            this.setState({ sstate: value });
        } else this.setState({ [e.target.name]: value });
    };

    handleAmt(e){
        this.setState({
            amount: e.target.value
        });
    }

    setInfo() {
        let arr = []
        for (let key in this.state) {
            arr.push(this.state[key]);
        }
        this.setState({
            info: arr
        });
        console.log(arr);
    }


    donateContent() {
        return (
            <div className="div-donate">
                <p className="donate-text">Help us keep noncommercial community radio on the air with a secure pledge today!</p>
                <div>
                    <Button color="red" size="huge" onClick={(e) => this.showDesc(e, "88.1")}>88.1 FM</Button>
                    <Button color="orange" size="huge" onClick={(e) => this.showDesc(e, "daily-fiddy")}>Daily "Fiddy"</Button>
                    <Button color="purple" size="huge" onClick={(e) => this.showDesc(e, "buck-a-day")}>Buck-a-day</Button>
                    <Button color="green" size="huge" onClick={(e) => this.showDesc(e, "50-years-of-kzsc")}>50 years of KZSC</Button>
                    <Button color="teal" size="huge" onClick={(e) => this.showDesc(e, "kzsc-sustainer")}>KZSC Sustainer</Button>
                    <Button color="teal" size="huge" onClick={(e) => this.showDesc(e, "kzsc-sustainer")}>Other</Button>
                </div>
                <div className="donateDesc"> {this.state.donateDesc}</div>
            </div>
        )
    }

    donateAmount(){
        return(
            <div>
                <span className="donation-desc"> Donation Amount </span>
                <input type="number" className="donation-amount-box" value={this.state.amount} onChange={this.handleAmt} />
            </div>
        );
    }

    merchandiseContent() {
        return (
            <div className="div-donate">
                <p className="donate-text">Help us keep noncommercial community radio on the air by purchasing merchandise!</p>
                <Grid columns='equal' divided stackable>
                    <Grid.Row>
                        <Grid.Column>
                            <div>
                                <Button className="merch-btn" onClick={() => this.addToCart('shirt')} ><img className="images" src={shirt} /></Button>
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <div>
                                <Button className="merch-btn" onClick={() => this.addToCart('bag')}><img className="images" src={bag} /></Button>
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <div>
                                <Button className="merch-btn" onClick={() => this.addToCart('buttons')}><img className="images" src={buttons} /></Button>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }

    merchandiseCart(){
        return(
            <div>
                <ItemList items={this.state.items} remove={this.removeItem}/>
            </div>
        )
    }

    render() {
        return (
            <Container className="donate-container">
                <div className="content-btns">
                    <Button className="donate-btn" onClick={() => this.toggle("donate")}>Donate</Button>
                </div>
                <div className="content-btns">
                    <Button className="donate-btn" onClick={() => this.toggle("me")}>Merchandise</Button>
                </div>
                {this.state.content == "donate" ? this.donateContent() : this.merchandiseContent()}
                <span className="content-header"> Information </span>
                <div className="personal-form">
                    <div>
                        <Grid columns='equal' divided stackable>
                            <Grid.Row>
                                <Grid.Column>
                                    <Form className="form-container">
                                        <Form.Group inline>
                                            <Form.Input className="form-input" label="First Name" placeholder="First Name" name="fname" value={this.state.fname} onChange={this.handleChange} />
                                            <Form.Input className="form-input" label="Last Name" placeholder="Last Name" name="lname" value={this.state.lname} onChange={this.handleChange} />
                                        </Form.Group>
                                        <Form.Group inline>
                                            <Form.Input className="form-input" label="Email Address" placeholder="Email Address" name="email" value={this.state.email} onChange={this.handleChange} />
                                            <Form.Input className="form-input" label="Phone Number" placeholder="Phone Number" name="pnumber" value={this.state.pnumber} onChange={this.handleChange} />
                                        </Form.Group>
                                        <Form.Group inline>
                                            <Form.Input className="form-input2" label="City" placeholder="City" name="city" value={this.state.city} onChange={this.handleChange} />
                                            <Form.Input  className="form-input2" label="ZIP Code" placeholder="ZIP Code" name="zip" value={this.state.zip} onChange={this.handleChange} />
                                            <Form.Select className="form-input2" label="State" options={states} placeholder="State" name="sstate" value={this.state.sstate} onChange={this.handleChange} />
                                        </Form.Group>
                                    </Form>
                                </Grid.Column>
                                <Grid.Column>
                                    <Form className="form-container">
                                        <Form.Group inline>
                                            <Form.Input className="form-input" label="Cardholder Name" placeholder="Name on card" name="cname" value={this.state.cname} onChange={this.handleChange} />
                                            <Form.Input className="form-input" label="Credit Card Number" placeholder="Number" name="ccnum" value={this.state.ccnum} onChange={this.handleChange} />
                                        </Form.Group>
                                        <Form.Group inline>
                                            <Form.Input className="form-input" label="Expiration Date" placeholder="Expiration Date" name="expdate" type="date" value={this.state.expdate} onChange={this.handleChange} />
                                            <Form.Input className="form-input" label="Card Security Code" placeholder="000" name="scode" value={this.state.scode} onChange={this.handleChange} />
                                        </Form.Group>
                                    </Form>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </div>
                </div>
                <div className="div-checkout">
                    <Grid columns= 'equal' stackable>
                        <Grid.Row>
                            <Grid.Column>
                                {this.state.content == "donate" ? this.donateAmount() : this.merchandiseCart()}
                            </Grid.Column>
                            <Grid.Column>
                                <Button color="red" onClick={() => this.setInfo()}>Confirm Donation</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </Container>
        );""
    }
}

class ItemList extends Component{

    render(){
        return (
            <div>
            <h1> Current Cart </h1>
            <List>
                {this.props.items.map(item => (
                    <List.Item key={item.id} className="list-item">
                    {console.log(item.img) }
                        <List.Content>
                            <div className="item-header">
                                <Image className="list-image" src={item.img[item.id]} />
                                <List.Header className="list-header"> {item.header} </List.Header>
                            </div>
                            <List.Description className="list-description"> {item.desc} </List.Description>
                            <div>
                                <Button className="remove-btn" onClick={() => this.props.remove(item.id)}>Remove</Button>
                            </div>
                        </List.Content>
                        <hr/>
                    </List.Item>
                ))}
            </List>
            </div>
        );
    }
}

export default Donate;
