/*
 * src/components/Sponsor/Sponsor.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

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
                <Grid className="grid-css" stackable>
                    <h1> KZSC Thanks the following local businesses for their support: </h1>
                    <Grid.Row columns={4}>
                        <Grid.Column>
                            <h3>Aloha Island Grille</h3>
                             <p className="p-sponsor"><a href="https://www.alohaislandgrille.com">www.alohaislandgrille.com</a><br/>
                            1700 Portola Dr
                            Santa Cruz CA 95062 </p>
                        </Grid.Column>
                        <Grid.Column>
                            <h3>Growing Up Wild</h3>
                            <p className="p-sponsor"><a href="https://www.growingupwild.com">www.growingupwild.com</a><br/>
                            2015 Eureka Canyon Road
                            Watsonville, CA 95076
                            (831) 768-7089</p>
                        </Grid.Column>
                        <Grid.Column>
                            <h3>Razorfrog Web Design</h3>
                            <p className="p-sponsor"><a href="https://www.razorfrog.com">www.razorfrog.com</a><br/>
                            (415) 480-4587 </p>
                        </Grid.Column>
                        <Grid.Column>
                            <h3>Bill the Oysterman</h3>
                            <p className="p-sponsor"><a href="https://www.billtheoysterman.com">www.billtheoysterman.com</a><br/>
                            1011 Lewis Circle
                            Santa Cruz, CA 95062
                            (831) 227-8551 </p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={4}>
                        <Grid.Column>
                            <h3>Halibut for Humanity</h3>
                            <p className="p-sponsor"><a href="https://www.halibut4humanity.org">www.halibut4humanity.org</a><br/></p>
                        </Grid.Column>
                        <Grid.Column>
                            <h3>Santa Cruz Hydroponics</h3>
                            <p className="p-sponsor"><a href="https://santacruz-hydroponics.gardeningunlimited.com">santacruz-hydroponics.gardeningunlimited.com</a><br/></p>
                        </Grid.Column>
                        <Grid.Column>
                            <h3>Bluebeat Music</h3>
                            <p className="p-sponsor"><a href="https://www.bluebeatmusic.com">www.bluebeatmusic.com</a><br/>
                            PO Box 100
                            Santa Cruz, 95063
                            (831) 454-8807 </p>
                        </Grid.Column>
                        <Grid.Column>
                            <h3>High Ground Organics</h3>
                            <p className="p-sponsor"><a href="https://www.highgroundorganics.com">www.highgroundorganics.com</a><br/>
                            PO Box 2601
                            Watsonville, CA 95076-2601 </p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={4}>
                        <Grid.Column>
                            <h3>Santa Cruz Waves Magazine</h3>
                            <p className="p-sponsor"><a href="https://www.santacruzwaves.com">www.santacruzwaves.com</a><br/>
                            3912 Portola Drive #7
                            Santa Cruz, CA 95062
                            (831) 295-3063 </p>
                        </Grid.Column>
                        <Grid.Column>
                            <h3>Indigital Recording Studios</h3>
                            <p className="p-sponsor"><a href="https://www.indigitalrec.com">www.indigitalrec.com</a><br/>
                            1305 Fair Avenue
                            Santa Cruz, CA 95060
                            (831) 419-6070 </p>
                        </Grid.Column>
                        <Grid.Column>
                            <h3>Seahorse Swim School</h3>
                            <p className="p-sponsor"><a href="https://www.seahorseswimschool.com">www.seahorseswimschool.com</a><br/>
                            1505 Seascape Blvd
                            Aptos, CA 95003
                            (831) 476-7946</p>
                        </Grid.Column>
                        <Grid.Column>
                            <h3>Bookshop Santa Cruz</h3>
                            <p className="p-sponsor"><a href="https://www.bookshopsantacruz.com">www.bookshopsantacruz.com</a><br/>
                            1520 Pacific Avenue
                            Santa Cruz, CA 95060
                            (831) 423-0900</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={4}>
                        <Grid.Column>
                            <h3>Kuumbwa Jazz Center</h3>
                            <p className="p-sponsor"><a href="https://www.kuumbwajazz.org" >www.kuumbwajazz.org</a><br/>
                            320 Cedar Street #2
                            Santa Cruz, CA 95060 </p>
                        </Grid.Column>
                        <Grid.Column>
                            <h3>Schoolhouse Chai</h3>
                            <p className="p-sponsor"><a href="https://schoolhousechai.com">schoolhousechai.com</a><br/>
                            Janis@Schoolhousechai.com
                            (831) 469-3092 </p>
                        </Grid.Column>
                        <Grid.Column>
                            <h3>Cannon Western, MA, MFT</h3>
                            <p className="p-sponsor"><a href="https://canonwestern.com">canonwestern.com</a><br/>
                            147 River Street South #204
                            Santa Cruz, CA 95060
                            (831) 454-9155 </p>
                        </Grid.Column>
                        <Grid.Column>
                            <h3>UCSC Arts Division</h3>
                            <p className="p-sponsor"> <a href="https://arts.ucsc.edu">arts.ucsc.edu</a><br/></p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={4}>
                        <Grid.Column>
                            <h3>Coke Farm</h3>
                            <p className="p-sponsor"><a href="https://www.cokefarm.com">www.cokefarm.com</a><br/>
                            P.O. Box 60
                            San Bautista, CA 95045
                            (831) 623-2100</p>
                        </Grid.Column>
                        <Grid.Column>
                            <h3>Ow Family Properties</h3>
                            <p className="p-sponsor"><a href="https://www.owcommerical.com">www.owcommerical.com</a><br/>
                            1601 41Avenue #202
                            Capitola, CA 95010
                            (831) 247-1175</p>
                        </Grid.Column>
                        <Grid.Column>
                            <h3>UCSC Campus Life</h3>
                            <p className="p-sponsor"><a href="https://deanofstudents.ucsc.edu">deanofstudents.ucsc.edu</a><br/> </p>
                        </Grid.Column>
                        <Grid.Column>
                            <h3>Edible Monterey Bay</h3>
                            <p className="p-sponsor"><a href=">https://ediblemontereybay.com">ediblemontereybay.com</a><br/> </p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={4}>
                        <Grid.Column>
                            <h3>Pono Hawaiian Grill</h3>
                            <p className="p-sponsor"><a href="https://www.ponohawaiiangrill.com">www.ponohawaiiangrill.com</a><br/></p>
                            120 Union Street
                            Santa Cruz, CA 95060
                            (831) 426-7666
                        </Grid.Column>
                        <Grid.Column>
                            <h3>Woodstock’s Pizza</h3>
                            <p className="p-sponsor"><a href="https://www.woodstockscruz.com">www.woodstockscruz.com</a><br/>
                            710 Front Street
                            Santa Cruz, CA 95060
                            (831) 427-4444  </p>
                        </Grid.Column>
                        <Grid.Column>
                            <h3>Good Times</h3>
                            <p className="p-sponsor"><a href="https://www.goodtimes.sc">www.goodtimes.sc</a><br/>
                            1011 Pacific Avenue Ste. 320
                            Santa Cruz, CA 95060
                            (831) 458-1100 </p>
                        </Grid.Column>
                        <Grid.Column>
                            <p className="p-sponsor"><h3>Pure Water of Santa Cruz</h3>
                            2106C Mission Street
                            Santa Cruz, CA 95060
                            (831) 426-5456 </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default Sponsor;
