import React, {Component} from 'react';
import { Container, Button, Form, Grid, Column, Segment } from 'semantic-ui-react';

import './Schedule.css';

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

    dailyContent() {
        return (
            <div className="div-calendar">
                <p className="calendar-text">Program Schedule &amp; Playlists</p>
                <Grid>
                  <Grid.Row columns='equal' divided stackable columns={7}>
                    <Grid.Column>
                      <Button color="red" onClick={(e) => this.showDesc(e, "sunday")}>Sunday</Button>
                    </Grid.Column>
                    <Grid.Column>
                      <Button color="red" onClick={(e) => this.showDesc(e, "monday")}>Monday</Button>
                    </Grid.Column>
                    <Grid.Column>
                      <Button color="red" onClick={(e) => this.showDesc(e, "tuesday")}>Tuesday</Button>
                    </Grid.Column>
                    <Grid.Column>
                      <Button color="red" onClick={(e) => this.showDesc(e, "wednesday")}>Wednesday</Button>
                    </Grid.Column>
                    <Grid.Column>
                      <Button color="red" onClick={(e) => this.showDesc(e, "thursday")}>Thursday</Button>
                    </Grid.Column>
                    <Grid.Column>
                      <Button color="red" onClick={(e) => this.showDesc(e, "friday")}>Friday</Button>
                    </Grid.Column>
                    <Grid.Column>
                      <Button color="red" onClick={(e) => this.showDesc(e, "saturday")}>Saturday</Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Grid>
                  <Grid.Row columns={1}>
                    <Grid.Column>
                      <div className="donateDesc"> {this.state.donateDesc}</div>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
            </div>
        )
    }

    weeklyContent() {
        return (
            <div className="div-calendar">
                <p className="calendar-text">Full Week Schedule</p>
                <Grid divided stackable columns={8}>
                    <Grid.Row>
                        <Grid.Column width={1}>
                          Time
                        </Grid.Column>
                        <Grid.Column>
                          Sunday
                        </Grid.Column>
                        <Grid.Column>
                            Monday
                        </Grid.Column>
                        <Grid.Column>
                            Tuesday
                        </Grid.Column>
                        <Grid.Column>
                            Wednesday
                        </Grid.Column>
                        <Grid.Column>
                            Thursday
                        </Grid.Column>
                        <Grid.Column>
                            Friday
                        </Grid.Column>
                        <Grid.Column>
                            Saturday
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={1}>
                          12 am
                        </Grid.Column>
                        <Grid.Column>
                          <Segment>
                            Beat Smorgasborg<br/>
                            Groktopus<br/>
                            12:00 - 2:00 am
                          </Segment>
                          <Segment>
                            Mystery Spot<br/>
                            KZSC<br/>
                            2:00 - 6:00 am
                          </Segment>
                          <Segment>
                            Whimsical Will O Wisps<br/>
                            D-NA
                            6:00 - 9:00 am
                          </Segment>
                          <Segment>
                            Breakfast in Bed<br/>
                            Betsy / Lani / Maria / Carol / LC / DJ Compost<br/>
                            9:00 - 12:00 pm
                          </Segment>
                          <Segment>
                            Backroads<br/>
                            Jeff Emery / Chris<br/>
                            12:00 - 2:00 pm
                          </Segment>
                          <Segment>
                            Local Brew<br/>
                            Telltale / Jazzy J / Jinx<br/>
                            2:00 - 4:00 pm
                          </Segment>
                          <Segment>
                            CR8 Diggers Anonymous<br/>
                            Olright
                            4:00 - 6:00 pm
                          </Segment>
                          <Segment>
                            Pacifica Evening News<br/>
                            6:00 - 6:30 pm
                          </Segment>
                          <Segment>
                            Low-Tide Flow<br/>
                            Mostly Mild Midnight Mocha<br/>
                            6:30 - 8:00 pm
                          </Segment>
                          <Segment>
                            Insect Agony<br/>
                            David Anton Savage / DJ Catfish / Q / DJPK<br/>
                            8:00 - 10:00 pm
                          </Segment>
                          <Segment>
                            What Lurks Beneath<br/>
                            DJ Catfish<br/>
                            10:00 - 12:00 pm
                          </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            Monday text
                        </Grid.Column>
                        <Grid.Column>
                            Tuesday text
                        </Grid.Column>
                        <Grid.Column>
                            Wednesday text
                        </Grid.Column>
                        <Grid.Column>
                            Thursday text
                        </Grid.Column>
                        <Grid.Column>
                            Friday text
                        </Grid.Column>
                        <Grid.Column>
                            Saturday text
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }

    render() {
        return (
            <Container className="calendar-container">
                <div className="content-btns">
                    <Button className="calendar-btn" onClick={() => this.toggle("daily")}>Daily Calendar</Button>
                </div>
                <div className="content-btns">
                    <Button className="calendar-btn" onClick={() => this.toggle("me")}>Full Calendar</Button>
                </div>
                {this.state.content == "daily" ? this.dailyContent() : this.weeklyContent()}
            </Container>
        );
    }
}

export default Schedule;
