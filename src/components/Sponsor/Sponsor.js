
import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';
import './Sponsor.css';

// react icons 
import Newspaper from 'react-icons/lib/fa/newspaper-o';
import Microphone from 'react-icons/lib/fa/microphone';
import Monitor from 'react-icons/lib/fa/television';

class Sponsor extends Component{
    render(){
        return(
            <div>
                <Grid className="grid-css" stackable>
                    <h1 id="h1-title"> Become a Patron of the Airwaves: Be a KZSC Underwriter! </h1>
                    <Grid.Row columns={2}>
                        <Grid.Column  left >
                            <div>
                                <h2> Make a connection </h2>
                                <p className="p-desc p-color"> A KZSC Underwriting is a great way to connect with our fiercely loyal listeners.</p>
                                <p className="p-desc">
                                    We broadcast 24/7 to over 25,000 students, faculty, and staff on the UC Santa Cruz campus and into the heart of the Greater Monterey Bay Area, with a potential listening audience of 3.2 million. Our webstreams are followed around the world and we have more than 6,000 followers on social media.
                                </p>
                            </div>
                        </Grid.Column>
                        <Grid.Column  left >
                            <div>
                                <h2> Support KZSC Radio </h2>
                                <p className="p-desc">
                                    You can save money and increase your exposure on KZSC by getting a customized contract. For more information, please email [Insert Name] at [Insert Email] or call  (831) 459-4733.
                                </p>
                            </div>
                        </Grid.Column >
                    </Grid.Row>
                    <Grid.Row columns={3}>
                        <Grid.Column center >
                            <div>
                               <h2> On Air <Microphone className="fa-icon"/></h2>  
                                <p  className="p-desc">Your on-air announcements can be aired during your choice of programs or specific times. With over 60 different music and public affairs programs, KZSC’s Underwriting Program offers a unique opportunity for you or your company to reach a targeted audience. </p>
                            </div>
                        </Grid.Column>
                        <Grid.Column center >
                            <div>
                                <h2>Online <Monitor className="fa-icon"/></h2>
                                <p className="p-desc">All KZSC underwriters are featured on our website including your phone number, address, and website if desired. </p>
                            </div>
                        </Grid.Column>
                        <Grid.Column center>
                            <div>
                                <h2>In Print <Newspaper className="fa-icon"/> </h2>
                                <p className="p-desc">Underwriting space in the quarterly KZSC Program Guide is available on a first-come, first-serve basis as part of specific underwriting contracts. The guide is available at locations on campus and throughout the community. </p>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2}>
                        <Grid.Column left>
                            <p className="p-desc"> Ongoing Underwriting </p>
                        </Grid.Column>
                        <Grid.Column left>
                            <p className="p-desc"> Further Description </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default Sponsor;