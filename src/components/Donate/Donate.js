import React, { Component } from 'react';
import { Container, Button, Form, Grid, Column } from 'semantic-ui-react';
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

class Donate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "donate",
            donateDesc: "Support KZSC by donating $88.10",
            fname: "", lname: "",
            email: "", pnumber: "",
            city: "", zip: "", sstate: "",
            cname: "", ccnum: "",
            expdate: "", scode: "",
        }
        this.toggle = this.toggle.bind(this);
        this.showDesc = this.showDesc.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.setInfo = this.setInfo.bind(this);
    }

    toggle(req) {
        if (req != this.state.content) {
            this.setState({
                content: req
            })
        }
    }

    showDesc(e, req) {
        switch (req) {
            case '88.1':
                this.setState({
                    donateDesc: "Help KZSC stay on the airwaves by donating $88.10"
                })
                break;
            case 'daily-fiddy':
                this.setState({
                    donateDesc: "Help KZSC stay on the airwaves by donating 182.50"
                })
                break;
            case 'buck-a-day':
                this.setState({
                    donateDesc: "Help KZSC stay on the airwaves by donating $365"
                })
                break;
            case '50-years-of-kzsc':
                this.setState({
                    donateDesc: "Help KZSC stay on the airwaves by donating $600"
                })
                break;
            case 'kzsc-sustainer':
                this.setState({
                    donateDesc: "Help KZSC stay on the airwaves by donating $1057.20"
                })
                break;
            default:
                console.log("Nothing selected");
                break;
        }
    }


    handleChange = (e, { value }) => {
        if (e.target.name === undefined) {
            this.setState({ sstate: value });
        } else this.setState({ [e.target.name]: value });
    };

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
                    <Button color="red" size="massive" onClick={(e) => this.showDesc(e, "88.1")}>88.1 FM</Button>
                    <Button color="orange" size="massive" onClick={(e) => this.showDesc(e, "daily-fiddy")}>Daily "Fiddy"</Button>
                    <Button color="purple" size="massive" onClick={(e) => this.showDesc(e, "buck-a-day")}>Buck-a-day</Button>
                    <Button color="green" size="massive" onClick={(e) => this.showDesc(e, "50-years-of-kzsc")}>50 years of KZSC</Button>
                    <Button color="teal" size="massive" onClick={(e) => this.showDesc(e, "kzsc-sustainer")}>KZSC Sustainer</Button>
                </div>
                <div className="donateDesc"> {this.state.donateDesc}</div>
            </div>
        )
    }

    merchandiseContent() {
        return (
            <div className="div-donate">
                <p className="donate-text">Help us keep noncommercial community radio on the air by purchasing merchandise!</p>
                <Grid columns='equal' divided stackable>
                    <Grid.Row>
                        <Grid.Column>
                            <div>
                                <img className="images" src={shirt} />
                                {/*<div className="div-beneath-img">

                                        <Button color="red"> Add </Button>
                                    </div>*/}
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <div>
                                <img className="images" src={bag} />
                                {/*<div className="div-beneath-img">
                                        <Button color="red"> Add </Button>
                                    </div>*/}
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <div>
                                <img className="images" src={buttons} />
                                {/*<div className="div-beneath-img">
                                        <Button color="red"> Add </Button>
                                    </div>*/}
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
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
                                            <Form.Input className="form-input" label="Expiration Date" placeholder="Expiration Date" name="expdate" value={this.state.expdate} onChange={this.handleChange} />
                                            <Form.Input className="form-input" label="Card Security Code" placeholder="000" name="scode" value={this.state.scode} onChange={this.handleChange} />
                                        </Form.Group>
                                    </Form>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </div>

                </div>
                <div className="div-checkout">
                    <Button color="red" onClick={() => this.setInfo()}>Confirm donation</Button>
                </div>
            </Container>
        );
    }
}

export default Donate;