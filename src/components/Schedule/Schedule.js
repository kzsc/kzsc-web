import React, {Component} from 'react';
import { Container, Button, Grid, Segment } from 'semantic-ui-react';

import './Schedule.css';

class Schedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "daily",
            dayofweek: "sunday",
            dailyContet: this.sundayContent(),
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
        if (req !== this.state.content) {
            this.setState({
                content: req
            })
        }
    }

    showDesc(e, req) {
        switch (req) {
            case 'sunday':
                this.setState({
                    dailyContet: this.sundayContent()
                });
                break;
            case 'monday':
                this.setState({
                    dailyContet: this.mondayContent()
                });
                break;
            case 'tuesday':
                this.setState({
                    dailyContet: this.tuesdayContent()
                });
                break;
            case 'wednesday':
                this.setState({
                    dailyContet: this.wednesdayContent()
                });
                break;
            case 'thursday':
                this.setState({
                    dailyContet: this.sundayContent()
                });
                break;
            case 'friday':
                this.setState({
                    dailyContet: this.fridayContent()
                });
                break;
            case 'saturday':
                this.setState({
                    dailyContent: this.saturdayContent()
                });
                break;
            default:
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
                  <Grid.Row columns='equal' divided stackable>
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
                      <div className="donateDesc"> {this.state.dailyContet}</div>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
            </div>
        )
    }

    sundayContent() {
      return (
        <div>
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
        </div>
      )
    }

    mondayContent() {
      return (
        <div>
          <Segment>
            Generations<br/>
            Nightwuds<br/>
            12:00 - 2:00 am
          </Segment>
          <Segment>
            Mystery Spot<br/>
            KZSC<br/>
            2:00 - 6:00 am
          </Segment>
          <Segment>
            Its All Good<br/>
            Bruce<br/>
            6:00 - 9:00 am
          </Segment>
          <Segment>
            Every Shade of Blue<br/>
            Morganic<br/>
            9:00 - 11:00 am
          </Segment>
          <Segment>
            World of Tunes<br/>
            MoKay / Mu<br/>
            11:00 - 12:30 pm
          </Segment>
          <Segment>
            Suburban Relapse<br/>
            DJ Gata<br/>
            12:30 - 2:00 pm
          </Segment>
          <Segment>
            Cruise Control<br/>
            Iyzard<br/>
            2:00 - 4:00 pm
          </Segment>
          <Segment>
            Unfiltered Camels<br/>
            Brant Herrett / David Anton Savage<br/>
            4:00 - 6:00 pm
          </Segment>
          <Segment>
            Pacifica Evening News<br/>
            6:00 - 7:30 pm
          </Segment>
          <Segment>
            Closet Free Radio<br/>
            DJ Kai Dragon / RICHARD<br/>
            7:00 - 8:30 pm
          </Segment>
          <Segment>
            The Yangtze River<br/>
            Mu<br/>
            8:30 - 10:00 pm
          </Segment>
          <Segment>
            Melination<br/>
            kaviar<br/>
            10:00 - 11:00 pm
          </Segment>
          <Segment>
            Thats Fresh<br/>
            Jinx / riz aka djrsd<br/>
            11:00 - 12:00 am
          </Segment>
        </div>
      )
    }

    tuesdayContent() {
      return (
        <div>
          <Segment>
            Alive in the Septic Tank<br/>
            DJ Maladroit<br/>
            12:00 - 1:30 am
          </Segment>
          <Segment>
            Mystery Spot<br/>
            KZSC<br/>
            1:30 - 6:00 am
          </Segment>
          <Segment>
            Two Steps From The Blues<br/>
            Charlie<br/>
            6:00 - 9:00 am
          </Segment>
          <Segment>
            All Fruits Ripe<br/>
            Daddy Spleece<br/>
            9:00 - 12:00 pm
          </Segment>
          <Segment>
            Radio Behind the Diner<br/>
            Cassette Dream<br/>
            12:00 - 2:00 pm
          </Segment>
          <Segment>
            Electric Owl<br/>
            Crux / Brandon Berry<br/>
            2:00 - 3:00 pm
          </Segment>
          <Segment>
            Silver &amp; Gold<br/>
            Jazzy J<br/>
            3:00 - 4:00 pm
          </Segment>
          <Segment>
            The Old Cold River<br/>
            DJPK<br/>
            4:00 - 6:00 pm
          </Segment>
          <Segment>
            Pacifica Evening News<br/>
            6:00 - 7:00 pm
          </Segment>
          <Segment>
            Universal Grapevine<br/>
            Bruce Bratton<br/>
            7:00 - 8:00 pm
          </Segment>
          <Segment>
            Super 8<br/>
            Rocko<br/>
            8:00 - 10:00 pm
          </Segment>
          <Segment>
            Queen Beats<br/>
            Jinx / kaviar<br/>
            10:00 - 12:00 am
          </Segment>
        </div>
      )
    }

    wednesdayContent() {
      return (
        <div>
          <Segment>
            Angry, Young, &amp; Dorm<br/>
            The Anarchist<br/>
            12:00 - 2:00 am
          </Segment>
          <Segment>
            Mystery Spot<br/>
            KZSC<br/>
            2:00 - 6:00 am
          </Segment>
          <Segment>
            Wiki Wiki Wednesday<br/>
            Lani<br/>
            6:00 - 9:00 am
          </Segment>
          <Segment>
            Dr. Ts Vinylorium<br/>
            JT<br/>
            9:00 - 12:00 pm
          </Segment>
          <Segment>
            Artist on Art<br/>
            DJ Hope<br/>
            12:00 - 1:00 pm
          </Segment>
          <Segment>
            Nebulous<br/>
            Firey Nairi<br/>
            1:00 - 2:00 pm
          </Segment>
          <Segment>
            Girls Germs<br/>
            ROYGBIV<br/>
            2:00 - 4:00 pm
          </Segment>
          <Segment>
            Golden Road<br/>
            Art O Sullivan<br/>
            4:00 - 6:00 pm
          </Segment>
          <Segment>
            Pacifica Evening News<br/>
            6:00 - 7:00 pm
          </Segment>
          <Segment>
            Talkabout<br/>
            Sleepy John<br/>
            7:00 - 8:30 pm
          </Segment>
          <Segment>
            Disc Hocky<br/>
            Firey Nairi / Jazzy J / Just Visiting / DJane<br/>
            8:30 - 10:00 pm
          </Segment>
          <Segment>
            Got Rapps?<br/>
            riz aka djrsd<br/>
            10:00 - 12:00 am
          </Segment>
        </div>
      )
    }

    thursdayContent() {
      return (
        <div>
          <Segment>
            Bass Si-na-tr-a-rchy<br/>
            Dan Woo<br/>
            12:00 - 2:00 am
          </Segment>
          <Segment>
            Mystery Spot<br/>
            KZSC<br/>
            2:00 - 6:00 am
          </Segment>
          <Segment>
            Here, There and Everywhere<br/>
            Jazzy J / DJ Hope / Cruncan Cronuts<br/>
            6:00 - 9:00 am
          </Segment>
          <Segment>
            Joy in the Morning<br/>
            DJ Tiffany<br/>
            9:00 - 12:00 pm
          </Segment>
          <Segment>
            Transformation Highway<br/>
            John Malkin / Telltale<br/>
            12:00 - 1:00 pm
          </Segment>
          <Segment>
            Pop Palace<br/>
            DJ Gina<br/>
            1:00 - 2:00 pm
          </Segment>
          <Segment>
            Instrument Journal<br/>
            Maelin<br/>
            2:00 - 4:00 pm
          </Segment>
          <Segment>
            Recuerdos<br/>
            tunamelt<br/>
            4:00 - 5:30
          </Segment>
          <Segment>
            Voces Criticas<br/>
            DJ Cusco<br/>
            5:30 - 6:00 pm
          </Segment>
          <Segment>
            Pacifica Evening News<br/>
            6:00 - 7:00 pm
          </Segment>
          <Segment>
            Glazed Over<br/>
            Eve<br/>
            7:00 - 8:30 pm
          </Segment>
          <Segment>
            Santa Cruz Laboratory for Dance-Based Sciences<br/>
            JUST VISITING<br/>
            8:30 - 10:00 pm
          </Segment>
          <Segment>
            Que te importa!<br/>
            melcriada<br/>
            10:00 - 12:00 am
          </Segment>
        </div>
      )
    }

    fridayContent() {
      return(
        <div>
          <Segment>
            Lo-fi Lullaby<br/>
            GwaiLow<br/>
            12:00 - 2:00 am
          </Segment>
          <Segment>
            Mystery Spot<br/>
            KZSC<br/>
            2:00 - 6:00 am
          </Segment>
          <Segment>
            Bushwackers Breakfast Club<br/>
            Golden Voice Gene / Sleepy John /
            Dangerous Dan / Mentee Mairo<br/>
            6:00 - 9:00 am
          </Segment>
          <Segment>
            Lagniappe<br/>
            Bobo / Lani / Antoine / Morganic /
            Bruce / Rocko / DJ Sweet Tea<br/>
            9:00 - 10:30 am
          </Segment>
          <Segment>
            Not So Distant Relatives<br/>
            LC<br/>
            10:30 - 12:00 pm
          </Segment>
          <Segment>
            Test of Time<br/>
            Carol<br/>
            12:00 - 2:00 pm
          </Segment>
          <Segment>
            Out Front, Outback<br/>
            Larry Blood<br/>
            2:00 - 4:00 pm
          </Segment>
          <Segment>
            Flannel & Fog<br/>
            Cruncan Cronuts<br/>
            4:00 - 5:00 pm
          </Segment>
          <Segment>
            Slug Talk<br/>
            riz aka dirsd<br/>
            5:00 - 5:30 pm
          </Segment>
          <Segment>
            This Just in From Outdoors<br/>
            KZSC / Antoine<br/>
            5:30 - 6:00 pm
          </Segment>
          <Segment>
            Pacifica Evening News<br/>
            6:00 - 7:00 pm
          </Segment>
          <Segment>
            Spaced Station<br/>
            Q<br/>
            7:00 - 8:00 pm
          </Segment>
          <Segment>
            Daily Vibration<br/>
            DJ Headrest<br/>
            8:00 - 10:00 pm
          </Segment>
          <Segment>
            Sneak out &amp; run<br/>
            Crabmasher<br/>
            10:00 - 12:00 am
          </Segment>
        </div>
      )
    }

    saturdayContent() {
      return(
        <div>
          <Segment>
            Motorik Massive<br/>
            dj crackfox<br/>
            12:00 - 2:00 am
          </Segment>
          <Segment>
            Mystery Spot<br/>
            KZSC<br/>
            2:00 - 6:00 am
          </Segment>
          <Segment>
            Re-air of Closet Free Radio<br/>
            KZSC<br/>
            6:00 - 7:30 am
          </Segment>
          <Segment>
            Re-air of This Just In From Outdoors<br/>
            KZSC<br/>
            7:30 - 8:00 am
          </Segment>
          <Segment>
            Re-air of Artists on Art<br/>
            DJ Hope<br/>
            8:00 - 9:00 am
          </Segment>
          <Segment>
            Destination Earth<br/>
            Bennett Williamson<br/>
            9:00 - 12:00 pm
          </Segment>
          <Segment>
            Jazz Kitty<br/>
            BlueJay (aka Jen Neal)<br/>
            12:00 - 2:00 pm
          </Segment>
          <Segment>
            Synthetic Love<br/>
            Slow Joe Crow<br/>
            2:00 - 4:00 pm
          </Segment>
          <Segment>
            Living In The 80s<br/>
            DJ Danny On The Radio<br/>
            4:00 - 6:00 pm
          </Segment>
          <Segment>
            Pacifica Evening News<br/>
            6:00 - 6:30 pm
          </Segment>
          <Segment>
            Strictly Rockers<br/>
            Abraham / DJ YB<br/>
            6:00 - 8:30 pm
          </Segment>
          <Segment>
            Box_37<br/>
            O.T_37<br/>
            8:30 - 10:00 pm
          </Segment>
          <Segment>
            Purgatory<br/>
            Chuck Bass<br/>
            10:0 - 12:00 am
          </Segment>
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
                          12 am<br/><br/><br/><br/>1 am<br/><br/><br/><br/>
                          2 am<br/><br/><br/><br/>2 am<br/><br/><br/><br/>
                          4 am<br/><br/><br/><br/>5 am<br/><br/><br/><br/>
                          6 am<br/><br/><br/><br/>7 am<br/><br/><br/><br/>
                          8 am<br/><br/><br/><br/>9 am<br/><br/><br/><br/>
                          10 am<br/><br/><br/><br/>11 am<br/><br/><br/><br/>
                          12 pm<br/><br/><br/><br/>1 pm<br/><br/><br/><br/>
                          2 pm<br/><br/><br/><br/>3 pm<br/><br/><br/><br/>
                          4 pm<br/><br/><br/><br/>5 pm<br/><br/><br/><br/>
                          6 pm<br/><br/><br/><br/>7 pm<br/><br/><br/><br/>
                          8 pm<br/><br/><br/><br/>9 pm<br/><br/><br/><br/>
                          10 pm<br/><br/><br/>11 pm<br/><br/><br/><br/>
                          12 am
                        </Grid.Column>
                        <Grid.Column>
                          {this.sundayContent()}
                        </Grid.Column>
                        <Grid.Column>
                          {this.mondayContent()}
                        </Grid.Column>
                        <Grid.Column>
                          {this.tuesdayContent()}
                        </Grid.Column>
                        <Grid.Column>
                          {this.wednesdayContent()}
                        </Grid.Column>
                        <Grid.Column>
                          <Segment>
                            Alive in the Septic Tank<br/>
                            DJ Maladroit<br/>
                            12:00 - 1:30 am
                          </Segment>
                          <Segment>
                            Mystery Spot<br/>
                            KZSC<br/>
                            1:30 - 6:00 am
                          </Segment>
                          <Segment>
                            Two Steps From The Blues<br/>
                            Charlie<br/>
                            6:00 - 9:00 am
                          </Segment>
                          <Segment>
                            All Fruits Ripe<br/>
                            Daddy Spleece<br/>
                            9:00 - 12:00 pm
                          </Segment>
                          <Segment>
                            Radio Behind the Diner<br/>
                            Cassette Dream<br/>
                            12:00 - 2:00 pm
                          </Segment>
                          <Segment>
                            Electric Owl<br/>
                            Crux / Brandon Berry<br/>
                            2:00 - 3:00 pm
                          </Segment>
                          <Segment>
                            Silver &amp; Gold<br/>
                            Jazzy J<br/>
                            3:00 - 4:00 pm
                          </Segment>
                          <Segment>
                            The Old Cold River<br/>
                            DJPK<br/>
                            4:00 - 6:00 pm
                          </Segment>
                          <Segment>
                            Pacifica Evening News<br/>
                            6:00 - 7:00 pm
                          </Segment>
                          <Segment>
                            Universal Grapevine<br/>
                            Bruce Bratton<br/>
                            7:00 - 8:00 pm
                          </Segment>
                          <Segment>
                            Super 8<br/>
                            Rocko<br/>
                            8:00 - 10:00 pm
                          </Segment>
                          <Segment>
                            Queen Beats<br/>
                            Jinx / kaviar<br/>
                            10:00 - 12:00 am
                          </Segment>
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
                          <Segment>
                            Alive in the Septic Tank<br/>
                            DJ Maladroit<br/>
                            12:00 - 1:30 am
                          </Segment>
                          <Segment>
                            Mystery Spot<br/>
                            KZSC<br/>
                            1:30 - 6:00 am
                          </Segment>
                          <Segment>
                            Two Steps From The Blues<br/>
                            Charlie<br/>
                            6:00 - 9:00 am
                          </Segment>
                          <Segment>
                            All Fruits Ripe<br/>
                            Daddy Spleece<br/>
                            9:00 - 12:00 pm
                          </Segment>
                          <Segment>
                            Radio Behind the Diner<br/>
                            Cassette Dream<br/>
                            12:00 - 2:00 pm
                          </Segment>
                          <Segment>
                            Electric Owl<br/>
                            Crux / Brandon Berry<br/>
                            2:00 - 3:00 pm
                          </Segment>
                          <Segment>
                            Silver &amp; Gold<br/>
                            Jazzy J<br/>
                            3:00 - 4:00 pm
                          </Segment>
                          <Segment>
                            The Old Cold River<br/>
                            DJPK<br/>
                            4:00 - 6:00 pm
                          </Segment>
                          <Segment>
                            Pacifica Evening News<br/>
                            6:00 - 7:00 pm
                          </Segment>
                          <Segment>
                            Universal Grapevine<br/>
                            Bruce Bratton<br/>
                            7:00 - 8:00 pm
                          </Segment>
                          <Segment>
                            Super 8<br/>
                            Rocko<br/>
                            8:00 - 10:00 pm
                          </Segment>
                          <Segment>
                            Queen Beats<br/>
                            Jinx / kaviar<br/>
                            10:00 - 12:00 am
                          </Segment>
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
                    <Button className="calendar-btn" onClick={() => this.toggle("weekly")}>Full Calendar</Button>
                </div>
                {this.state.content === "daily" ? this.dailyContent() : this.weeklyContent()}
            </Container>
        );
    }
}

export default Schedule;
