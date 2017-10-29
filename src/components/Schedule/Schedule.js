import React, {Component} from 'react';
import { Container, Button, Form, Grid, Column } from 'semantic-ui-react';
import './Schedule.css';
// import shirt from './kzsc-shirt.jpg';
// import bag from './kzsc-bag.jpg';
// import buttons from './kzsc-buttons.jpg';
/*
class Schedule extends Component{
    render(){
        return(
            <div>  Component, To be filled</div>
        );
    }
}

export default Schedule;
/*
/* ----------------------------------------------------------- */
const states = [
    { key: 'AL', text: 'Alabama', name: 'sstate', value: 'alabama' }
];

const sizes = [
    { key: 's', text: 'Small', value: 'small' }
];

const info = [];

class Schedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "me",
            dayofweek: "sunday",
            donateDesc: "Sunday Calendar",
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
            case 'sunday':
                this.setState({
                    donateDesc: "Sunday Calendar"
                })
                break;
            case 'monday':
                this.setState({
                    donateDesc: "Monday Calendar"
                })
                break;
            case 'tuesday':
                this.setState({
                    donateDesc: "Tuesday Calendar"
                })
                break;
            case 'wednesday':
                this.setState({
                    donateDesc: "Wednesday Calendar"
                })
                break;
            case 'thursday':
                this.setState({
                    donateDesc: "Thursday Calendar"
                })
                break;
            case 'friday':
                this.setState({
                    donateDesc: "Friday Calendar"
                })
                break;
            case 'saturday':
                this.setState({
                    donateDesc: "Satuday Calendar"
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
                <p className="donate-text">Program Schedule</p>
                <div>
                    <Button color="red" size="massive" onClick={(e) => this.showDesc(e, "sunday")}>Sunday</Button>
                    <Button color="orange" size="massive" onClick={(e) => this.showDesc(e, "monday")}>Monday</Button>
                    <Button color="purple" size="massive" onClick={(e) => this.showDesc(e, "tuesday")}>Tuesday</Button>
                    <Button color="green" size="massive" onClick={(e) => this.showDesc(e, "wednesday")}>Wednesday</Button>
                    <Button color="teal" size="massive" onClick={(e) => this.showDesc(e, "thursday")}>Thursday</Button>
                    <Button color="teal" size="massive" onClick={(e) => this.showDesc(e, "friday")}>Friday</Button>
                    <Button color="teal" size="massive" onClick={(e) => this.showDesc(e, "saturday")}>Saturday</Button>
                </div>
                <div className="donateDesc"> {this.state.donateDesc}</div>
            </div>
        )
    }

    merchandiseContent() {
        return (
            <div className="div-donate">
                <p className="donate-text">Program Schedule</p>
                <Grid columns='equal' divided stackable>
                    <Grid.Row>
                        <Grid.Column>
                          <Button color="red">Sunday</Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button color="red">Monday</Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button color="red">Tuesday</Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button color="red">Wednesday</Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button color="red">Thursday</Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button color="red">Friday</Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button color="red">Saturday</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }

    /*sundaySchedule() {
      return (
{this.state.dayofweek == "sunday" ? this.sundaySchedule() : this.mondaySchedule() }


             )
    }*/

    render() {
        return (
            <Container className="donate-container">
                <div className="content-btns">
                    <Button className="donate-btn" onClick={() => this.toggle("donate")}>By Day</Button>
                </div>
                <div className="content-btns">
                    <Button className="donate-btn" onClick={() => this.toggle("me")}>Merchandise</Button>
                </div>
                {this.state.content == "donate" ? this.donateContent() : this.merchandiseContent()}

            </Container>
        );
    }
}

export default Schedule;
