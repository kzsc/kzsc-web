import React, {Component} from 'react';
import {Container, Button, Form} from 'semantic-ui-react';
import './Donate.css';
import shirt from './kzsc-shirt.jpg';
import bag from './kzsc-bag.jpg';
import buttons from './kzsc-buttons.jpg';


const states = [
    {key:'AL', text:'Alabama', value:'alabama' },{key:'AK', text:'Alaska', value:'alaska' }, 
    {key:'AZ', text:'Arizona', value:'arizona'}, {key:'AR', text: 'Arkansas', value: 'arkansas'},
    {key:'CA', text: 'California', value: 'california'},{key:'CO', text: 'Colorado', value: 'colorado'},
    {key:'CT', text: 'Connecticut', value: 'connecticut'},{key:'DE', text: 'Delaware', value: 'delaware'},
    {key:'FL', text: 'Florida', value: 'florida'},{key:'GA', text: 'Georgia', value: 'georgia'},
    {key:'HI', text: 'Hawaii', value: 'hawaii'},{key:'ID', text: 'Idaho', value: 'idaho'},
    {key:'IL', text: 'Illinois', value: 'illinois'},{key:'IN', text: 'Indiana', value: 'indiana'},
    {key:'IA', text: 'Iowa', value:'iowa'},{key:'KS', text:'Kansas', value: 'kansas'},
    {key:'KY', text: 'Kentucky', value: 'kentucky'},{key:'LA', text: 'Lousiana', value: 'louisana'},
    {key:'ME', text: 'Maine', value: 'maine'},{key:'MD', text: 'Maryland', value: 'maryland'},
    {key:'MA', text: 'Massachusetts', value: 'massachusetts'},{key:'MI', text: 'Michigan', value: 'michigan'},
    {key:'MN', text: 'Minnesota', value: 'minnesota'},{key:'MS', text: 'Mississippi', value: 'mississippi'},
    {key:'MO', text: 'Missouri', value: 'missouri'},{key:'MT', text: 'Montana', value: 'montana'},
    {key:'NE', text: 'Nebraska', value: 'nebraska'},{key:'NV', text: 'Nevada', value: 'nevada'},
    {key:'NH', text: 'New Hampshire', value: 'new hampshire'}, {key:'NJ', text: 'New Jersey', value: 'new jersey'},
    {key:'NM', text: 'New Mexico', value: 'new mexico'}, {key:'NY', text: 'New York', value: 'new york'},
    {key:'NC', text: 'North Carolina', value: 'north carolina'},{key:'ND', text: 'North Dakota', value: 'north dakota'},
    {key:'OH', text: 'Ohio', value: 'ohio'},{key:'OK', text: 'Oklahoma', value: 'oklahoma'},
    {key:'OR', text: 'Oregon', value: 'oregon'},{key:'PA ', text: 'Pennsylvania', value: 'pennsylvania'},
    {key:'RI', text: 'Rhode Island', value: 'rhode island'},{key:'SC', text: 'South Carolina', value: 'south carolina'},
    {key:'TN', text: 'Tennessee', value: 'tennessee'},{key:'TX', text: 'Texas', value: 'texas'},
    {key:'UT', text: 'Utah', value: 'utah'},{key:'VT', text: 'Vermont', value: 'vermont'},
    {key:'VA', text: 'Virginia', value: 'virgina'},{key:'WA', text: 'Washington', value: 'washington'},
    {key:'WV', text: 'West Virginia', value: 'west virginia'},{key:'WI', text: 'Wisconsin', value: 'wisconsin'},
    {key:'WY', text: 'Wyoming', value: 'wyoming'}
];

class Donate extends Component{
    constructor(props){
        super(props);
        this.state = {
           content: "donate",
           info: []
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle(value){
        if(value != this.state.content){
            this.setState({
                content: value
            })
        }
    }

    donateContent(){
        return(
            <div className="div-donate">
                <p className="donate-text">Help us keep noncommercial community radio on the air with a secure pledge today!</p>
                    <div>
                        <Button color="red" size="massive">88.1 FM</Button>
                        <Button color="orange" size="massive">Daily "Fiddy"</Button>
                        <Button color="purple" size="massive">Buck-a-day</Button>
                        <Button color="green" size="massive">50 years of KZSC</Button>
                        <Button color="teal" size="massive">KZSC Sustainer</Button>
                    </div>
            </div>
        )
    }

    merchandiseContent(){
        return(
            <div className="div-donate">
                <p className="donate-text">Help us keep noncommercial community radio on the air by purchasing merchandise!</p>
                    <div>
                        <Button size="massive">Stuff1</Button>
                        <Button size="massive">Daily "Fiddy"</Button>
                        <Button size="massive">Buck-a-day</Button>
                        <Button size="massive">50 years of KZSC</Button>
                        <Button size="massive">KZSC Sustainer</Button>
                    </div>
            </div>
        );
    }




    render(){
        return(
            <Container className="donate-container">
                    <div className="content-btns"> 
                        <Button className="donate-btn" onClick={() => this.toggle("donate")}>Donate</Button>
                    </div>
                    <div className="content-btns"> 
                        <Button className="donate-btn" onClick={() => this.toggle("me")}>Merchandise</Button>
                    </div>
                    { this.state.content == "donate" ? this.donateContent() : this.merchandiseContent()}
                    <span className="content-header">Your Information </span>
                    <div className="personal-form">
                        <div>
                        <Form className="form-container"> 
                            <Form.Group inline>
                                <Form.Input className="form-input" label="First Name" placeholder="First Name"/>
                                <Form.Input className="form-input" label="Last Name" placeholder="Last Name"/>
                            </Form.Group>
                            <Form.Group inline>
                                <Form.Input className="form-input" label="Email Address" placeholder="Email Address"/>
                                <Form.Input className="form-input" label="Phone Number" placeholder="Phone Number"/>
                            </Form.Group>
                            <Form.Group inline>
                                <Form.Input label="City" placeholder="City"/>
                                <Form.Input label="ZIP Code" placeholder="ZIP Code"/>
                                <Form.Select label="State" options={states} placeholder="State" />
                            </Form.Group>
                        </Form>
                        </div>
                        <div>This is where the selection content will go </div>
                    </div>
                    <span className="content-header">Credit Card Info </span>
                    <div className="personal-form">
                        <div>
                        <Form className="form-container"> 
                            <Form.Group inline>
                                <Form.Input className="form-input" label="Cardholder Name" placeholder="Name on card"/>
                                <Form.Input className="form-input" label="Credit Card Number" placeholder="Number"/>
                            </Form.Group>
                            <Form.Group inline>
                                <Form.Input className="form-input" label="Expiration Date" placeholder="Expiration Date"/>
                                <Form.Input className="form-input" label="Card Security Code" placeholder="000"/>
                            </Form.Group>
                        </Form>
                        </div>
                        <div>This is where the selection content will go </div>
                    </div>


                    <div>
                     Final Information about Purchase 
                     <Button color="red"> Submit </Button>
                    </div>
            </Container>
        ); 
    }
}

export default Donate;